// Wow
var Wow = function() {
    "use strict";

    // Handle Wow
    var handleWow = function() {
        var wow = new WOW({
		    boxClass:     'wow',
		    offset:       0,          // distance to the element when triggering the animation (default is 0)
		    mobile:       false,
		    tablet:       false
		});
		wow.init();
    }

    return {
        init: function() {
            handleWow(); // initial setup for counter
        }
    }
}();

$(document).ready(function() {
    Wow.init();
});