function solve() {
	return function (selector, count) {

		if (Number.isNaN(count) || count <= 0 || typeof count !== 'number') {
			throw new Error('wrong count');
		}

		if(typeof selector !== 'string'){
			throw new Error('wrong selector');
		}

		var $selector = $(selector);

		var $ul = $("<ul />").addClass('items-list').prependTo($selector);

		for(var i = 0; i < count; i += 1)
		{
			$("<li />").addClass('list-item').text("List item #" + i).appendTo($ul);
		}
	};
}
module.exports = solve;