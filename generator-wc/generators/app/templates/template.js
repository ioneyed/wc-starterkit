class <%= wcClassName %> extends HTMLElement {

	static get is() { return '<%= wcElementName %>'; }

	static get template() {
		if (!this._template) {
			this._template = makeTemplate`
				<style>
					<!-- inject: ./<%= wcElementName %>.css-->
				</style>
				<!-- inject: ./<%= wcElementName %>.html-->
			`;
		}
		return this._template;
	} 

	constructor() {
		super();

		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.appendChild(document.importNode(<%= wcClassName %>.template.content, true));
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
	ShadyCSS.prepareTemplate(<%= wcClassName %>.template, <%= wcClassName %>.is);
}
window.customElements.define(<%= wcClassName %>.is, <%= wcClassName %>);