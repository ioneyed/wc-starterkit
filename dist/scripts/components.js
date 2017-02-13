"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n\t\t\t\t<style>\n\t\t\t\t\t.notif {\n\t\t\t\t\t  position: fixed;\n\t\t\t\t\t  left: 20px;\n\t\t\t\t\t  bottom: -60px;\n\t\t\t\t\t  background-color: #323232;\n\t\t\t\t\t  padding: 12px 24px 17px 24px;\n\t\t\t\t\t  vertical-align: middle;\n\t\t\t\t\t  color: #fff;\n\t\t\t\t\t  box-shadow: 0 7px 18px rgba(0, 0, 0, 0.2);\n\t\t\t\t\t  border-radius: 1px; }\n\t\t\t\t\t\n\t\t\t\t\t.peek {\n\t\t\t\t\t  -webkit-animation: peek 5s forwards;\n\t\t\t\t\t  -webkit-animation-delay: 0.5s;\n\t\t\t\t\t  animation: peek 5s forwards;\n\t\t\t\t\t  -webkit-animation-delay: 500ms;\n\t\t\t\t\t          animation-delay: 500ms; }\n\t\t\t\t\t\n\t\t\t\t\t.show {\n\t\t\t\t\t  -webkit-animation: show 0.5s forwards;\n\t\t\t\t\t  -webkit-animation-delay: 0.5s;\n\t\t\t\t\t  animation: show 0.5s forwards;\n\t\t\t\t\t  -webkit-animation-delay: 500ms;\n\t\t\t\t\t          animation-delay: 500ms; }\n\t\t\t\t\t\n\t\t\t\t\t@-webkit-keyframes peek {\n\t\t\t\t\t  0% {\n\t\t\t\t\t    bottom: -60px; }\n\t\t\t\t\t  10% {\n\t\t\t\t\t    bottom: 20px; }\n\t\t\t\t\t  /*demo purposes; change to 20px*/\n\t\t\t\t\t  90% {\n\t\t\t\t\t    bottom: 20px; }\n\t\t\t\t\t  /*demo purposes; change to 20px*/\n\t\t\t\t\t  100% {\n\t\t\t\t\t    bottom: -60px; } }\n\t\t\t\t\t\n\t\t\t\t\t@keyframes peek {\n\t\t\t\t\t  0% {\n\t\t\t\t\t    bottom: -60px; }\n\t\t\t\t\t  10% {\n\t\t\t\t\t    bottom: 20px; }\n\t\t\t\t\t  /*demo purposes; change to 20px*/\n\t\t\t\t\t  90% {\n\t\t\t\t\t    bottom: 20px; }\n\t\t\t\t\t  /*demo purposes; change to 20px*/\n\t\t\t\t\t  100% {\n\t\t\t\t\t    bottom: -60px; } }\n\t\t\t\t\t\n\t\t\t\t\t@-webkit-keyframes show {\n\t\t\t\t\t  100% {\n\t\t\t\t\t    bottom: 20px; } }\n\t\t\t\t\t\n\t\t\t\t\t@keyframes show {\n\t\t\t\t\t  100% {\n\t\t\t\t\t    bottom: 20px; } }\n\t\t\t\t\t\n\t\t\t\t</style>\n\t\t\t\t<div class=\"notif\">\n\t\t\t\t\t<slot></slot>\n\t\t\t\t</div>\n\t\t\t"], ["\n\t\t\t\t<style>\n\t\t\t\t\t.notif {\n\t\t\t\t\t  position: fixed;\n\t\t\t\t\t  left: 20px;\n\t\t\t\t\t  bottom: -60px;\n\t\t\t\t\t  background-color: #323232;\n\t\t\t\t\t  padding: 12px 24px 17px 24px;\n\t\t\t\t\t  vertical-align: middle;\n\t\t\t\t\t  color: #fff;\n\t\t\t\t\t  box-shadow: 0 7px 18px rgba(0, 0, 0, 0.2);\n\t\t\t\t\t  border-radius: 1px; }\n\t\t\t\t\t\n\t\t\t\t\t.peek {\n\t\t\t\t\t  -webkit-animation: peek 5s forwards;\n\t\t\t\t\t  -webkit-animation-delay: 0.5s;\n\t\t\t\t\t  animation: peek 5s forwards;\n\t\t\t\t\t  -webkit-animation-delay: 500ms;\n\t\t\t\t\t          animation-delay: 500ms; }\n\t\t\t\t\t\n\t\t\t\t\t.show {\n\t\t\t\t\t  -webkit-animation: show 0.5s forwards;\n\t\t\t\t\t  -webkit-animation-delay: 0.5s;\n\t\t\t\t\t  animation: show 0.5s forwards;\n\t\t\t\t\t  -webkit-animation-delay: 500ms;\n\t\t\t\t\t          animation-delay: 500ms; }\n\t\t\t\t\t\n\t\t\t\t\t@-webkit-keyframes peek {\n\t\t\t\t\t  0% {\n\t\t\t\t\t    bottom: -60px; }\n\t\t\t\t\t  10% {\n\t\t\t\t\t    bottom: 20px; }\n\t\t\t\t\t  /*demo purposes; change to 20px*/\n\t\t\t\t\t  90% {\n\t\t\t\t\t    bottom: 20px; }\n\t\t\t\t\t  /*demo purposes; change to 20px*/\n\t\t\t\t\t  100% {\n\t\t\t\t\t    bottom: -60px; } }\n\t\t\t\t\t\n\t\t\t\t\t@keyframes peek {\n\t\t\t\t\t  0% {\n\t\t\t\t\t    bottom: -60px; }\n\t\t\t\t\t  10% {\n\t\t\t\t\t    bottom: 20px; }\n\t\t\t\t\t  /*demo purposes; change to 20px*/\n\t\t\t\t\t  90% {\n\t\t\t\t\t    bottom: 20px; }\n\t\t\t\t\t  /*demo purposes; change to 20px*/\n\t\t\t\t\t  100% {\n\t\t\t\t\t    bottom: -60px; } }\n\t\t\t\t\t\n\t\t\t\t\t@-webkit-keyframes show {\n\t\t\t\t\t  100% {\n\t\t\t\t\t    bottom: 20px; } }\n\t\t\t\t\t\n\t\t\t\t\t@keyframes show {\n\t\t\t\t\t  100% {\n\t\t\t\t\t    bottom: 20px; } }\n\t\t\t\t\t\n\t\t\t\t</style>\n\t\t\t\t<div class=\"notif\">\n\t\t\t\t\t<slot></slot>\n\t\t\t\t</div>\n\t\t\t"]),
    _templateObject2 = _taggedTemplateLiteral(["\n\t\t\t\t<style>\n\t\t\t\t\t/* https://kyusuf.com/post/completely-css-custom-checkbox-radio-buttons-and-select-boxes */\n\t\t\t\t\t:host {\n\t\t\t\t\t  display: block;\n\t\t\t\t\t  position: relative; }\n\t\t\t\t\t\n\t\t\t\t\t.select {\n\t\t\t\t\t  position: relative;\n\t\t\t\t\t  display: inline-block;\n\t\t\t\t\t  width: 100%;\n\t\t\t\t\t  max-width: 225px; }\n\t\t\t\t\t\n\t\t\t\t\t.select select {\n\t\t\t\t\t  display: inline-block;\n\t\t\t\t\t  width: 100%;\n\t\t\t\t\t  padding: 6px 33px 6px 15px;\n\t\t\t\t\t  cursor: pointer;\n\t\t\t\t\t  color: #484848;\n\t\t\t\t\t  border: 1px solid lightgray;\n\t\t\t\t\t  border-radius: 25px;\n\t\t\t\t\t  background: #ffffff;\n\t\t\t\t\t  /* Old browsers */\n\t\t\t\t\t  background: -webkit-linear-gradient(#ffffff 0%, #f6f6f6 47%, #efefef 100%);\n\t\t\t\t\t  background: linear-gradient(#ffffff 0%, #f6f6f6 47%, #efefef 100%);\n\t\t\t\t\t  /* FF3.6-15 */\n\t\t\t\t\t  /* Chrome10-25,Safari5.1-6 */\n\t\t\t\t\t  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\t\t\t\t\t  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#efefef',GradientType=0 );\n\t\t\t\t\t  appearance: none;\n\t\t\t\t\t  -webkit-appearance: none;\n\t\t\t\t\t  -moz-appearance: none;\n\t\t\t\t\t  font-size: 16px; }\n\t\t\t\t\t\n\t\t\t\t\t.select select::-ms-expand {\n\t\t\t\t\t  display: none; }\n\t\t\t\t\t\n\t\t\t\t\t.select select:hover,\n\t\t\t\t\t.select select:focus {\n\t\t\t\t\t  background: #efefef; }\n\t\t\t\t\t\n\t\t\t\t\t.select select:disabled {\n\t\t\t\t\t  pointer-events: none;\n\t\t\t\t\t  opacity: .5; }\n\t\t\t\t\t\n\t\t\t\t\t.select__arrow {\n\t\t\t\t\t  position: absolute;\n\t\t\t\t\t  top: 12px;\n\t\t\t\t\t  right: 18px;\n\t\t\t\t\t  width: 0;\n\t\t\t\t\t  height: 0;\n\t\t\t\t\t  pointer-events: none;\n\t\t\t\t\t  border-width: 8px 5px 0 5px;\n\t\t\t\t\t  border-style: solid;\n\t\t\t\t\t  border-color: #484848 transparent transparent transparent; }\n\t\t\t\t\t\n\t\t\t\t\t.select select:disabled ~ .select__arrow {\n\t\t\t\t\t  border-top-color: #ccc; }\n\t\t\t\t\t\n\t\t\t\t</style>\n\t\t\t\t<div class=\"select\">\n\t\t\t\t\t<select></select>\n\t\t\t\t\t<div class=\"select__arrow\"></div>\n\t\t\t\t</div>\n\t\t\t"], ["\n\t\t\t\t<style>\n\t\t\t\t\t/* https://kyusuf.com/post/completely-css-custom-checkbox-radio-buttons-and-select-boxes */\n\t\t\t\t\t:host {\n\t\t\t\t\t  display: block;\n\t\t\t\t\t  position: relative; }\n\t\t\t\t\t\n\t\t\t\t\t.select {\n\t\t\t\t\t  position: relative;\n\t\t\t\t\t  display: inline-block;\n\t\t\t\t\t  width: 100%;\n\t\t\t\t\t  max-width: 225px; }\n\t\t\t\t\t\n\t\t\t\t\t.select select {\n\t\t\t\t\t  display: inline-block;\n\t\t\t\t\t  width: 100%;\n\t\t\t\t\t  padding: 6px 33px 6px 15px;\n\t\t\t\t\t  cursor: pointer;\n\t\t\t\t\t  color: #484848;\n\t\t\t\t\t  border: 1px solid lightgray;\n\t\t\t\t\t  border-radius: 25px;\n\t\t\t\t\t  background: #ffffff;\n\t\t\t\t\t  /* Old browsers */\n\t\t\t\t\t  background: -webkit-linear-gradient(#ffffff 0%, #f6f6f6 47%, #efefef 100%);\n\t\t\t\t\t  background: linear-gradient(#ffffff 0%, #f6f6f6 47%, #efefef 100%);\n\t\t\t\t\t  /* FF3.6-15 */\n\t\t\t\t\t  /* Chrome10-25,Safari5.1-6 */\n\t\t\t\t\t  /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */\n\t\t\t\t\t  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#efefef',GradientType=0 );\n\t\t\t\t\t  appearance: none;\n\t\t\t\t\t  -webkit-appearance: none;\n\t\t\t\t\t  -moz-appearance: none;\n\t\t\t\t\t  font-size: 16px; }\n\t\t\t\t\t\n\t\t\t\t\t.select select::-ms-expand {\n\t\t\t\t\t  display: none; }\n\t\t\t\t\t\n\t\t\t\t\t.select select:hover,\n\t\t\t\t\t.select select:focus {\n\t\t\t\t\t  background: #efefef; }\n\t\t\t\t\t\n\t\t\t\t\t.select select:disabled {\n\t\t\t\t\t  pointer-events: none;\n\t\t\t\t\t  opacity: .5; }\n\t\t\t\t\t\n\t\t\t\t\t.select__arrow {\n\t\t\t\t\t  position: absolute;\n\t\t\t\t\t  top: 12px;\n\t\t\t\t\t  right: 18px;\n\t\t\t\t\t  width: 0;\n\t\t\t\t\t  height: 0;\n\t\t\t\t\t  pointer-events: none;\n\t\t\t\t\t  border-width: 8px 5px 0 5px;\n\t\t\t\t\t  border-style: solid;\n\t\t\t\t\t  border-color: #484848 transparent transparent transparent; }\n\t\t\t\t\t\n\t\t\t\t\t.select select:disabled ~ .select__arrow {\n\t\t\t\t\t  border-top-color: #ccc; }\n\t\t\t\t\t\n\t\t\t\t</style>\n\t\t\t\t<div class=\"select\">\n\t\t\t\t\t<select></select>\n\t\t\t\t\t<div class=\"select__arrow\"></div>\n\t\t\t\t</div>\n\t\t\t"]),
    _templateObject3 = _taggedTemplateLiteral(["\n\t\t\t\t<style>\n\t\t\t\t\t\n\t\t\t\t</style>\n\t\t\t\t<main id=\"testElement\"></main>\n\t\t\t"], ["\n\t\t\t\t<style>\n\t\t\t\t\t\n\t\t\t\t</style>\n\t\t\t\t<main id=\"testElement\"></main>\n\t\t\t"]);

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* https://codepen.io/jakamusic/pen/XXQJOP */

var arisToast = function (_HTMLElement) {
	_inherits(arisToast, _HTMLElement);

	_createClass(arisToast, [{
		key: "peek",
		value: function peek() {
			this.shadowRoot.querySelector(".notif").classList.remove("peek");
			this.shadowRoot.querySelector(".notif").classList.add("peek");
		}
	}], [{
		key: "is",
		get: function get() {
			return 'aris-toast';
		}
	}, {
		key: "template",
		get: function get() {
			if (!this._template) {
				this._template = makeTemplate(_templateObject);
			}
			return this._template;
		}
	}]);

	function arisToast() {
		_classCallCheck(this, arisToast);

		var _this = _possibleConstructorReturn(this, (arisToast.__proto__ || Object.getPrototypeOf(arisToast)).call(this));

		var shadowRoot = _this.attachShadow({ mode: 'open' });
		shadowRoot.appendChild(document.importNode(arisToast.template.content, true));
		return _this;
	}

	_createClass(arisToast, [{
		key: "connectedCallback",
		value: function connectedCallback() {
			// Shim styles, CSS custom props, etc. if native Shadow DOM isn't available.
			if (!!HTMLElement.prototype.attachShadow) {
				ShadyCSS.applyStyle(this);
			}
		}
	}]);

	return arisToast;
}(HTMLElement);

if (!!HTMLElement.prototype.attachShadow) {
	ShadyCSS.prepareTemplate(arisToast.template, arisToast.is);
}
window.customElements.define(arisToast.is, arisToast);

var beaconSelect = function (_HTMLElement2) {
	_inherits(beaconSelect, _HTMLElement2);

	_createClass(beaconSelect, [{
		key: "fireChangeEvent",
		value: function fireChangeEvent() {
			var event = new CustomEvent("change");
			this.dispatchEvent(event);
		}
	}, {
		key: "disabled",


		// A getter/setter for a disabled property.
		get: function get() {
			return this.hasAttribute('disabled');
		},
		set: function set(val) {
			if (val) {
				this.setAttribute('disabled', '');
			} else {
				this.removeAttribute('disabled');
			}
		}
	}], [{
		key: "is",
		get: function get() {
			return 'beacon-select';
		}
	}, {
		key: "template",
		get: function get() {
			if (!this._template) {
				this._template = makeTemplate(_templateObject2);
			}
			return this._template;
		}
	}, {
		key: "observedAttributes",
		get: function get() {
			return ['disabled'];
		}
	}]);

	function beaconSelect() {
		_classCallCheck(this, beaconSelect);

		var _this2 = _possibleConstructorReturn(this, (beaconSelect.__proto__ || Object.getPrototypeOf(beaconSelect)).call(this));

		var shadowRoot = _this2.attachShadow({ mode: 'open' });
		shadowRoot.appendChild(document.importNode(beaconSelect.template.content, true));
		var rootThis = _this2;

		_this2.addEventListener('click', function (e) {
			if (_this2.disabled) {
				return;
			}
		});

		_this2.addEventListener('touchstart', function (e) {
			if (_this2.disabled) {
				return;
			}
		});

		var MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
		var list = _this2;
		var options = _this2.querySelectorAll("option");

		var optionObserver = new MutationObserver(function (mutations) {
			mutations.forEach(function (mutation) {
				if (mutation.type === 'attributes') {

					var newOptionHTML = mutation.target.value;
					var select = shadowRoot.querySelector("select");
					var shadowOptions = shadowRoot.querySelectorAll("option");

					var _iteratorNormalCompletion = true;
					var _didIteratorError = false;
					var _iteratorError = undefined;

					try {
						for (var _iterator = shadowOptions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
							var option = _step.value;

							var oldOptionHTML = rootThis.value;

							if (option.hasAttribute("selected")) {
								option.removeAttribute("selected");
								rootThis.value = "";
								select.value = "";
								// rootThis.value = option.value;
								// shadowRoot.querySelector("select").value = option.value;
							} else {
								if (oldOptionHTML == newOptionHTML) {
									option.setAttribute("selected", "");
									rootThis.value = newOptionHTML;
									select.value = newOptionHTML;
								}
							}
						}
					} catch (err) {
						_didIteratorError = true;
						_iteratorError = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion && _iterator.return) {
								_iterator.return();
							}
						} finally {
							if (_didIteratorError) {
								throw _iteratorError;
							}
						}
					}
				}
			});
		});

		var observer = new MutationObserver(function (mutations) {
			mutations.forEach(function (mutation) {
				if (mutation.type === 'childList') {
					var _options = "";
					var _iteratorNormalCompletion2 = true;
					var _didIteratorError2 = false;
					var _iteratorError2 = undefined;

					try {
						for (var _iterator2 = mutation.target.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
							var option = _step2.value;

							_options += option.outerHTML;
							optionObserver.observe(option, {
								attributes: true,
								childList: true,
								characterData: true
							});
						}
						//shadowRoot.querySelector("select").innerHTML = options;
					} catch (err) {
						_didIteratorError2 = true;
						_iteratorError2 = err;
					} finally {
						try {
							if (!_iteratorNormalCompletion2 && _iterator2.return) {
								_iterator2.return();
							}
						} finally {
							if (_didIteratorError2) {
								throw _iteratorError2;
							}
						}
					}

					rootThis.value = shadowRoot.querySelector("select").value;
				}
			});
		});

		observer.observe(list, {
			attributes: true,
			childList: true,
			characterData: true
		});

		var _iteratorNormalCompletion3 = true;
		var _didIteratorError3 = false;
		var _iteratorError3 = undefined;

		try {
			for (var _iterator3 = options[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
				var option = _step3.value;

				optionObserver.observe(option, {
					attributes: true,
					childList: true,
					characterData: true
				});
			}
		} catch (err) {
			_didIteratorError3 = true;
			_iteratorError3 = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion3 && _iterator3.return) {
					_iterator3.return();
				}
			} finally {
				if (_didIteratorError3) {
					throw _iteratorError3;
				}
			}
		}

		return _this2;
	}

	_createClass(beaconSelect, [{
		key: "connectedCallback",
		value: function connectedCallback() {
			// Shim styles, CSS custom props, etc. if native Shadow DOM isn't available.
			if (!!HTMLElement.prototype.attachShadow) {
				ShadyCSS.applyStyle(this);
			}

			/* Because <slot> won't add the options into the select element (http://stackoverflow.com/questions/28835077/problems-using-a-select-tag-in-a-custom-element-with-a-content-tag)
   We have to use the following javascript to add the options into the select element.  Once we can extend elements with custom elements this can be changed to use <slot>  */
			var options = this.innerHTML;
			var select = this.shadowRoot.querySelector("select");
			var rootThis = this;
			select.innerHTML = options;
			rootThis.value = select.value;

			/* make beacon-select have the same value as the select */
			select.addEventListener("change", function (event) {
				rootThis.value = event.target.value;
				rootThis.fireChangeEvent();
			});
		}
	}, {
		key: "attributeChangedCallback",
		value: function attributeChangedCallback(name, oldValue, newValue) {
			var select = this.shadowRoot.querySelector("select");

			if (this.hasAttribute("disabled")) {
				select.setAttribute("disabled", "disabled");
			} else {
				select.removeAttribute("disabled");
			}
		}
	}]);

	return beaconSelect;
}(HTMLElement);

if (!!HTMLElement.prototype.attachShadow) {
	ShadyCSS.prepareTemplate(beaconSelect.template, beaconSelect.is);
}
window.customElements.define(beaconSelect.is, beaconSelect);

var testElement = function (_HTMLElement3) {
	_inherits(testElement, _HTMLElement3);

	_createClass(testElement, null, [{
		key: "is",
		get: function get() {
			return 'test-element';
		}
	}, {
		key: "template",
		get: function get() {
			if (!this._template) {
				this._template = makeTemplate(_templateObject3);
			}
			return this._template;
		}
	}]);

	function testElement() {
		_classCallCheck(this, testElement);

		var _this3 = _possibleConstructorReturn(this, (testElement.__proto__ || Object.getPrototypeOf(testElement)).call(this));

		var shadowRoot = _this3.attachShadow({ mode: 'open' });
		shadowRoot.appendChild(document.importNode(testElement.template.content, true));
		return _this3;
	}

	_createClass(testElement, [{
		key: "connectedCallback",
		value: function connectedCallback() {
			// Shim styles, CSS custom props, etc. if native Shadow DOM isn't available.
			if (!!HTMLElement.prototype.attachShadow) {
				ShadyCSS.applyStyle(this);
			}
		}
	}, {
		key: "disconnectedCallback",
		value: function disconnectedCallback() {}
	}, {
		key: "attributeChangedCallback",
		value: function attributeChangedCallback(attrName, oldVal, newVal) {}
	}]);

	return testElement;
}(HTMLElement);

if (!!HTMLElement.prototype.attachShadow) {
	ShadyCSS.prepareTemplate(testElement.template, testElement.is);
}
window.customElements.define(testElement.is, testElement);