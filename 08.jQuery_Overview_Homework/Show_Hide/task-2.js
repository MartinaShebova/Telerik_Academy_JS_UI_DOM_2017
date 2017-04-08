function solve() {
	return function (selector) {

		var $selector = $(selector);

        if (typeof selector !== 'string' || !($(selector).length)) {  
            throw Error("Must be a string or Jquery object");
        }

		var buttonContentElements = $selector.find(".button, .content");

		for (var i = 0; i < buttonContentElements.length; i += 1) {
			if (buttonContentElements[i].className === 'button') {
				buttonContentElements[i] = $(buttonContentElements[i]);
				buttonContentElements[i].html("hide");
			}
		}

		$(".button").on('click', function () {
			for (var i = 0; i < buttonContentElements.length - 1; i += 1) {
				buttonContentElements[i] = $(buttonContentElements[i]);
				buttonContentElements[i + 1] = $(buttonContentElements[i + 1]);
				if (buttonContentElements[i].hasClass("content") && buttonContentElements[i + 1].hasClass("button")) {
					if(buttonContentElements[i].css('display') !== 'none'){
						buttonContentElements[i].css('display', 'none');
						$(this).text('show');
					}
					else{
						buttonContentElements[i].css('display', '');
						$(this).text('hide');
					}
				}
			}
		});
	};
}

module.exports = solve;