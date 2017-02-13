arisHelper.removeClass = function (selector, myClass) {
    return new Promise(function(resolve, reject) {
        if (selector && myClass) {
            // get all elements that match our selector
            elements = document.querySelectorAll(selector);

            // remove class from all chosen elements
            for (var i=0; i<elements.length; i++) {
                elements[i].classList.remove(myClass);
            }

            resolve("Success");
        }
        else if (!selector && myClass) {
            reject(Error("Expecting selector argument in arisHelper.removeClass"));
        }
        else if (selector && !myClass) {
            reject(Error("Expecting myClass argument in arisHelper.removeClass"));
        }
        else {
            reject(Error("Expecting selector and myClass arguments in arisHelper.removeClass"));
        }
    });
};