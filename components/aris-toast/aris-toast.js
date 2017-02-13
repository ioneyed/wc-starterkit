/* https://codepen.io/jakamusic/pen/XXQJOP */

class arisToast extends HTMLElement {

	static get is() { return 'aris-toast'; }

	static get template() {
		if (!this._template) {
			this._template = makeTemplate`
				<style>
					<!-- inject: ./aris-toast.css-->
				</style>
				<!-- inject: ./aris-toast.html-->
			`;
		}
		return this._template;
	} 

    peek() {
        this.shadowRoot.querySelector(".notif").classList.remove("peek");
        this.shadowRoot.querySelector(".notif").classList.add("peek");
    }

	constructor() {
		super();

		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.appendChild(document.importNode(arisToast.template.content, true));
	} 

	connectedCallback() {
		// Shim styles, CSS custom props, etc. if native Shadow DOM isn't available.
		if (!!HTMLElement.prototype.attachShadow) {
			ShadyCSS.applyStyle(this);
		}
	}
}

if (!!HTMLElement.prototype.attachShadow) {
	ShadyCSS.prepareTemplate(arisToast.template, arisToast.is);
}
window.customElements.define(arisToast.is, arisToast);