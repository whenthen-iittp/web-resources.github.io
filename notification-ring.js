// you probably wouldn't want to use this as an actual notification icon just because it would annoy people... people like me.

$(function() {
	
	// check this out on a mobile device.
	if (/Mobi/.test(navigator.userAgent)) {
    setInterval(function() {
			navigator.vibrate();
		}, 3000);
	}
	
	
});