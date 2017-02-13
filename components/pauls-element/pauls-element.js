class paulsElement extends HTMLElement {

	static get is() { return 'pauls-element'; }

	static get template() {
		if (!this._template) {
			this._template = makeTemplate`
				<style>
					<!-- inject: ./pauls-element.css-->
				</style>
				<!-- inject: ./pauls-element.html-->
			`;
		}
		return this._template;
	} 

	constructor() {
		super();

		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.appendChild(document.importNode(paulsElement.template.content, true));
	} 

	connectedCallback() {
		// Shim styles, CSS custom props, etc. if native Shadow DOM isn't available.
		if (!!HTMLElement.prototype.attachShadow) {
			ShadyCSS.applyStyle(this);
		}
	}

	disconnectedCallback() {

	}

	attributeChangedCallback(attrName, oldVal, newVal) {
		
	}
}

if (!!HTMLElement.prototype.attachShadow) {
	ShadyCSS.prepareTemplate(paulsElement.template, paulsElement.is);
}
window.customElements.define(paulsElement.is, paulsElement);