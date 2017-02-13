arisHelper.domReady = function() {
    return new Promise(function(resolve, reject) {
        document.readyState === "interactive" || document.readyState === "complete" ? resolve("Success") : document.addEventListener("DOMContentLoaded", resolve("Success"));
    });
};