class beaconSelect extends HTMLElement {

	static get is() { return 'beacon-select'; }

	static get template() {
		if (!this._template) {
			this._template = makeTemplate`
				<style>
					<!-- inject: ./beacon-select.css-->
				</style>
				<!-- inject: ./beacon-select.html-->
			`;
		}
		return this._template;
	} 

	static get observedAttributes() {
    	return ['disabled'];
  	}

	// A getter/setter for a disabled property.
  	get disabled() {
    	return this.hasAttribute('disabled');
  	}
  	set disabled(val) {
		if (val) {
      		this.setAttribute('disabled', '');
    	} 
    	else {
      		this.removeAttribute('disabled');
    	}
  	}

	fireChangeEvent() {
		let event = new CustomEvent("change");
		this.dispatchEvent(event);
	}

	constructor() {
		super();

		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.appendChild(document.importNode(beaconSelect.template.content, true));
		let rootThis = this;
		
		this.addEventListener('click', e => {
      		if (this.disabled) {
        		return;
      		}
    	});

		this.addEventListener('touchstart', e => {
      		if (this.disabled) {
        		return;
      		}
    	});

		let MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
		let list = this;
		let options = this.querySelectorAll("option");

		
		let optionObserver = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				if (mutation.type === 'attributes') {

					let newOptionHTML = mutation.target.value;
					let select = shadowRoot.querySelector("select");
					let shadowOptions = shadowRoot.querySelectorAll("option");

					for (const option of shadowOptions) {
						let oldOptionHTML = rootThis.value;
						
						if (option.hasAttribute("selected")) {
							option.removeAttribute("selected");
							rootThis.value = "";
							select.value = "";
							// rootThis.value = option.value;
							// shadowRoot.querySelector("select").value = option.value;
						}
						else {
							if (oldOptionHTML == newOptionHTML) {
								option.setAttribute("selected", "");
								rootThis.value = newOptionHTML;
								select.value = newOptionHTML;
							}
						}
					}
				}
			});
		});
		
		
		let observer = new MutationObserver(function(mutations) {
			mutations.forEach(function(mutation) {
				if (mutation.type === 'childList') {
					let options = ``;
					for (const option of mutation.target.children) {
						options += option.outerHTML;
						optionObserver.observe(option, {
							attributes: true,
							childList: true,
							characterData: true
						});
					}
					//shadowRoot.querySelector("select").innerHTML = options;
					rootThis.value = shadowRoot.querySelector("select").value;
				}
			});
		});
		
		observer.observe(list, {
			attributes: true,
			childList: true,
			characterData: true
		});

		for (const option of options) {
			optionObserver.observe(option, {
				attributes: true,
				childList: true,
				characterData: true
			});
		}
	} 

	connectedCallback() {
		// Shim styles, CSS custom props, etc. if native Shadow DOM isn't available.
		if (!!HTMLElement.prototype.attachShadow) {
			ShadyCSS.applyStyle(this);
		}

		/* Because <slot> won't add the options into the select element (http://stackoverflow.com/questions/28835077/problems-using-a-select-tag-in-a-custom-element-with-a-content-tag)
		We have to use the following javascript to add the options into the select element.  Once we can extend elements with custom elements this can be changed to use <slot>  */
		let options = this.innerHTML;
		let select = this.shadowRoot.querySelector("select");
		const rootThis = this;
		select.innerHTML = options;
		rootThis.value = select.value;

		/* make beacon-select have the same value as the select */
		select.addEventListener("change", function(event) {
			rootThis.value = event.target.value;
			rootThis.fireChangeEvent();
		});
	}

	attributeChangedCallback(name, oldValue, newValue) {
		let select = this.shadowRoot.querySelector("select");

		if (this.hasAttribute("disabled")) {
			select.setAttribute("disabled", "disabled");
	    } 
	    else {
			select.removeAttribute("disabled");
	    }
	}
}

if (!!HTMLElement.prototype.attachShadow) {
	ShadyCSS.prepareTemplate(beaconSelect.template, beaconSelect.is);
}
window.customElements.define(beaconSelect.is, beaconSelect);