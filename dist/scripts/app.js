"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var getStoredJson = function getStoredJson() {
    return JSON.parse(localStorage.getItem("json"));
  };

  arisHelper.getJSON("styleguide.json").then(function (json) {
    //console.log(json);
    localStorage.setItem("json", JSON.stringify(json));

    /*Put the inital content on the page*/
    var mainHtml = "\n\t\t\t<section class=\"elementInfo\">\n\t\t\t\t<h1>" + json.pageTitle + "</h1>\n\t\t\t\t<p>" + json.pageDescription + "</p>\n\t\t\t</section>\n\t\t";
    document.querySelector("main").innerHTML = mainHtml;

    /*Prepare the sidenav*/
    var sideNavHtml = "";
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = json.elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var element = _step.value;

        sideNavHtml += "<li><a class=\"js-side-nav__link side-nav__link\" href=\"#" + element.name + "\">" + element.name + "</a></li>";
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

    document.querySelector(".side-nav__content").innerHTML = sideNavHtml;
    new SideNav(); //call new SideNav() only once all the links are rendered in the HTML.

    /* when link is clicked, show content for the element */
    document.querySelector(".side-nav__content").addEventListener("click", function () {
      setTimeout(function () {
        //wait 300 ms so that you get the new hash
        var element = window.location.hash;
        element = element.replace("#", "");
        var elements = getStoredJson().elements;

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var elementInList = _step2.value;

            if (elementInList.name == element) {
              var _mainHtml = "";

              _mainHtml += "<section class=\"exampleContainer\">";

              if (elementInList.name) {
                _mainHtml += "<h1>" + elementInList.name + "</h1>";
              }

              if (elementInList.description) {
                _mainHtml += "<p>" + elementInList.description + "</p>";
              }

              _mainHtml += "</section>";

              if (elementInList.examples) {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                  for (var _iterator3 = elementInList.examples[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var example = _step3.value;

                    var codeString = example.html.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/#newline#/g, "<br>").replace(/#tab#/g, "&nbsp;&nbsp;&nbsp;&nbsp;");

                    _mainHtml += "\n\t\t\t\t\t\t\t\t\t<hr>\n\t\t\t\t\t\t\t\t\t<section class=\"example\">\n\t\t\t\t\t\t\t\t\t\t<h2>" + example.title + "</h2>\n\t\t\t\t\t\t\t\t\t\t<p>" + example.description + "</p>\n\t\t\t\t\t\t\t\t\t\t<div class=\"codeContainer\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"codeSyntaxContainer\">\n\t\t\t\t\t\t\t\t\t\t\t\t<code class=\"codeSyntax\">" + codeString + "</code>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"codeRendered\">" + example.code + "</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t";
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
              }

              document.querySelector("main").innerHTML = _mainHtml;
            }
          }
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
      }, 300);
    });
  }, function (reason) {
    console.log(reason);
  });
})();

var Detabinator = function () {
  function Detabinator(element) {
    _classCallCheck(this, Detabinator);

    if (!element) {
      throw new Error('Missing required argument. new Detabinator needs an element reference');
    }
    this._inert = false;
    this._focusableElementsString = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex], [contenteditable]';
    this._focusableElements = Array.from(element.querySelectorAll(this._focusableElementsString));
  }

  _createClass(Detabinator, [{
    key: "inert",
    get: function get() {
      return this._inert;
    },
    set: function set(isInert) {
      if (this._inert === isInert) {
        return;
      }

      this._inert = isInert;

      this._focusableElements.forEach(function (child) {
        if (isInert) {
          // If the child has an explict tabindex save it
          if (child.hasAttribute('tabindex')) {
            child.__savedTabindex = child.tabIndex;
          }
          // Set ALL focusable children to tabindex -1
          child.setAttribute('tabindex', -1);
        } else {
          // If the child has a saved tabindex, restore it
          // Because the value could be 0, explicitly check that it's not false
          if (child.__savedTabindex === 0 || child.__savedTabindex) {
            return child.setAttribute('tabindex', child.__savedTabindex);
          } else {
            // Remove tabindex from ANY REMAINING children
            child.removeAttribute('tabindex');
          }
        }
      });
    }
  }]);

  return Detabinator;
}();

var SideNav = function () {
  function SideNav() {
    _classCallCheck(this, SideNav);

    this.showButtonEl = document.querySelector('.js-menu-show');
    this.hideButtonEl = document.querySelector('.js-menu-hide');
    this.sideNavEl = document.querySelector('.js-side-nav');
    this.sideNavContainerEl = document.querySelector('.js-side-nav-container');
    this.sideNavLinkEl = document.querySelectorAll('.js-side-nav__link');
    // Control whether the container's children can be focused
    // Set initial state to inert since the drawer is offscreen
    if (this.sideNavContainerEl) {
      this.detabinator = new Detabinator(this.sideNavContainerEl);
      this.detabinator.inert = true;

      this.showSideNav = this.showSideNav.bind(this);
      this.hideSideNav = this.hideSideNav.bind(this);
      this.blockClicks = this.blockClicks.bind(this);
      this.onTouchStart = this.onTouchStart.bind(this);
      this.onTouchMove = this.onTouchMove.bind(this);
      this.onTouchEnd = this.onTouchEnd.bind(this);
      this.onTransitionEnd = this.onTransitionEnd.bind(this);
      this.update = this.update.bind(this);

      this.startX = 0;
      this.currentX = 0;
      this.touchingSideNav = false;

      this.supportsPassive = undefined;
      this.addEventListeners();
    }
  }

  // apply passive event listening if it's supported


  _createClass(SideNav, [{
    key: "applyPassive",
    value: function applyPassive() {
      if (this.supportsPassive !== undefined) {
        return this.supportsPassive ? { passive: true } : false;
      }
      // feature detect
      var isSupported = false;
      try {
        document.addEventListener('test', null, { get passive() {
            isSupported = true;
          } });
      } catch (e) {}
      this.supportsPassive = isSupported;
      return this.applyPassive();
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      this.showButtonEl.addEventListener('click', this.showSideNav);
      this.hideButtonEl.addEventListener('click', this.hideSideNav);
      this.sideNavEl.addEventListener('click', this.hideSideNav);
      this.sideNavContainerEl.addEventListener('click', this.blockClicks);

      this.sideNavEl.addEventListener('touchstart', this.onTouchStart, this.applyPassive());
      this.sideNavEl.addEventListener('touchmove', this.onTouchMove, this.applyPassive());
      this.sideNavEl.addEventListener('touchend', this.onTouchEnd);
      for (var i = 0; i < this.sideNavLinkEl.length; i++) {
        this.sideNavLinkEl[i].addEventListener('click', this.hideSideNav);
      }
    }
  }, {
    key: "onTouchStart",
    value: function onTouchStart(evt) {
      if (!this.sideNavEl.classList.contains('side-nav--visible')) return;

      this.startX = evt.touches[0].pageX;
      this.currentX = this.startX;

      this.touchingSideNav = true;
      requestAnimationFrame(this.update);
    }
  }, {
    key: "onTouchMove",
    value: function onTouchMove(evt) {
      if (!this.touchingSideNav) return;

      this.currentX = evt.touches[0].pageX;
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd(evt) {
      if (!this.touchingSideNav) return;

      this.touchingSideNav = false;

      var translateX = Math.min(0, this.currentX - this.startX);
      this.sideNavContainerEl.style.transform = '';

      if (translateX < 0) {
        this.hideSideNav();
      }
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.touchingSideNav) return;

      requestAnimationFrame(this.update);

      var translateX = Math.min(0, this.currentX - this.startX);
      this.sideNavContainerEl.style.transform = "translateX(" + translateX + "px)";
    }
  }, {
    key: "blockClicks",
    value: function blockClicks(evt) {
      evt.stopPropagation();
    }
  }, {
    key: "onTransitionEnd",
    value: function onTransitionEnd(evt) {
      this.sideNavEl.classList.remove('side-nav--animatable');
      this.sideNavEl.removeEventListener('transitionend', this.onTransitionEnd);
    }
  }, {
    key: "showSideNav",
    value: function showSideNav() {
      this.sideNavEl.classList.add('side-nav--animatable');
      this.sideNavEl.classList.add('side-nav--visible');
      this.detabinator.inert = false;
      this.sideNavEl.addEventListener('transitionend', this.onTransitionEnd);
    }
  }, {
    key: "hideSideNav",
    value: function hideSideNav() {
      this.sideNavEl.classList.add('side-nav--animatable');
      this.sideNavEl.classList.remove('side-nav--visible');
      this.detabinator.inert = true;
      this.sideNavEl.addEventListener('transitionend', this.onTransitionEnd);
    }
  }]);

  return SideNav;
}();