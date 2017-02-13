arisHelper.addClass = function (selector, myClass) {
    return new Promise(function(resolve, reject) {
        if (selector && myClass) {
            // get all elements that match our selector
            let elements = document.querySelectorAll(selector);

            // add class to all chosen elements
            for (var i=0; i<elements.length; i++) {
                elements[i].classList.add(myClass);
            }

            resolve("Success");
        }
        else if (!selector && myClass) {
            reject(Error("Expecting selector argument in arisHelper.addClass"));
        }
        else if (selector && !myClass) {
            reject(Error("Expecting myClass argument in arisHelper.addClass"));
        }
        else {
            reject(Error("Expecting selector and myClass arguments in arisHelper.addClass"));
        }
    });
};