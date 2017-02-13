'use strict';

var arisHelper = {};
arisHelper.get = function (url) {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function () {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            } else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(Error(req.statusText));
            }
        };

        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
};
arisHelper.getJSON = function (url) {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('GET', url);
        req.responseType = 'json';

        req.onload = function () {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            } else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(req.response);
            }
        };

        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send();
    });
};
arisHelper.postJSON = function (url, json) {
    // Return a new promise.
    return new Promise(function (resolve, reject) {
        // Do the usual XHR stuff
        var req = new XMLHttpRequest();
        req.open('POST', url);
        req.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
        req.responseType = 'json';

        req.onload = function () {
            // This is called even on 404 etc
            // so check the status
            if (req.status == 200) {
                // Resolve the promise with the response text
                resolve(req.response);
            } else {
                // Otherwise reject with the status text
                // which will hopefully be a meaningful error
                reject(req.response);
            }
        };

        // Handle network errors
        req.onerror = function () {
            reject(Error("Network Error"));
        };

        // Make the request
        req.send(JSON.stringify(json));
    });
};
arisHelper.addClass = function (selector, myClass) {
    return new Promise(function (resolve, reject) {
        if (selector && myClass) {
            // get all elements that match our selector
            var _elements = document.querySelectorAll(selector);

            // add class to all chosen elements
            for (var i = 0; i < _elements.length; i++) {
                _elements[i].classList.add(myClass);
            }

            resolve("Success");
        } else if (!selector && myClass) {
            reject(Error("Expecting selector argument in arisHelper.addClass"));
        } else if (selector && !myClass) {
            reject(Error("Expecting myClass argument in arisHelper.addClass"));
        } else {
            reject(Error("Expecting selector and myClass arguments in arisHelper.addClass"));
        }
    });
};
arisHelper.domReady = function () {
    return new Promise(function (resolve, reject) {
        document.readyState === "interactive" || document.readyState === "complete" ? resolve("Success") : document.addEventListener("DOMContentLoaded", resolve("Success"));
    });
};
arisHelper.getClosest = function (elem, selector) {
    if (elem && selector) {
        // Element.matches() polyfill
        if (!Element.prototype.matches) {
            Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
        }

        // Get closest match
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }
    }
};
arisHelper.getQueryVariable = function (variable) {
    return new Promise(function (resolve, reject) {
        if (variable) {
            var query = window.location.search.substring(1);
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                if (pair[0] == variable) {
                    resolve(pair[1]);
                }
            }
        } else {
            reject(Error("Expecting variable argument in arisHelper.getQueryVariable"));
        }
    });
};
arisHelper.numberWithCommas = function (x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
arisHelper.removeClass = function (selector, myClass) {
    return new Promise(function (resolve, reject) {
        if (selector && myClass) {
            // get all elements that match our selector
            elements = document.querySelectorAll(selector);

            // remove class from all chosen elements
            for (var i = 0; i < elements.length; i++) {
                elements[i].classList.remove(myClass);
            }

            resolve("Success");
        } else if (!selector && myClass) {
            reject(Error("Expecting selector argument in arisHelper.removeClass"));
        } else if (selector && !myClass) {
            reject(Error("Expecting myClass argument in arisHelper.removeClass"));
        } else {
            reject(Error("Expecting selector and myClass arguments in arisHelper.removeClass"));
        }
    });
};