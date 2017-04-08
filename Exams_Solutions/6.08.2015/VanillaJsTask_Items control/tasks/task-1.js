function solve() {
	return function (selector, isCaseSensitive) {
		var wrapper = document.querySelector(selector);
		wrapper.className = 'items-control';
		isCaseSensitive = isCaseSensitive || false;

		//Adding elements area
		var addAreaDiv = document.createElement('div');
		addAreaDiv.className = 'add-controls';

		var enterText = document.createElement('label');
		enterText.innerHTML = 'Enter text';

		var addingInput = document.createElement('input');
		var addButton = document.createElement('button');
		addButton.className = 'button';
		addButton.innerHTML = 'Add';

		addAreaDiv.appendChild(enterText);
		addAreaDiv.appendChild(addingInput);
		addAreaDiv.appendChild(addButton);
		wrapper.appendChild(addAreaDiv);

		var ulContainer = document.createElement('div');
		ulContainer.className = 'result-controls';
		var ul = document.createElement('ul');
		ul.className = 'items-list';
		var li = document.createElement('li');
		li.className = 'list-item';
		var xButton = document.createElement('button');
		xButton.className = 'button';
		xButton.innerHTML = 'X';

		ulContainer.appendChild(ul);

		addButton.addEventListener('click', function () {
			var currentLi = li.cloneNode(true);
			var strong = document.createElement('strong');
			strong.innerHTML = addingInput.value;
			var xButtonClone = xButton.cloneNode(true);
			currentLi.appendChild(xButtonClone);
			currentLi.appendChild(strong);
			ul.appendChild(currentLi);
		});

		//Search elements area
		var searchDiv = document.createElement('div');
		searchDiv.className = 'search-controls';

		var searchLabel = document.createElement('label');
		searchLabel.innerHTML = 'Search:';

		var searchInput = document.createElement('input');
		searchDiv.appendChild(searchLabel);
		searchDiv.appendChild(searchInput);

		wrapper.appendChild(searchDiv);
		wrapper.appendChild(ulContainer);

		//Delete functionality
		var getUl = document.getElementsByClassName('items-list')[0];

		getUl.addEventListener('click', function (e) {
			var target = e.target;

			if (target.tagName === 'BUTTON') {
				target.parentNode.parentNode.removeChild(target.parentNode);
			}
		});

		//Search functionality

		var getInput = document.getElementsByTagName('input')[1];

		getInput.addEventListener('keyup', function (e) {
			var target = e.target;

			var allLi = getUl.children;

			for (var i = 0; i < allLi.length; i += 1) {
				if (isCaseSensitive) {
					if (allLi[i].lastChild.innerHTML.toLowerCase().indexOf(target.value.toLowerCase()) >= 0) {
						allLi[i].style.display = '';
					}
					else {
						allLi[i].style.display = 'none';
					}
				}
				else {
					if (allLi[i].lastChild.innerHTML.indexOf(target.value) >= 0) {
						allLi[i].style.display = '';
					}
					else {
						allLi[i].style.display = 'none';
					}
				}
			}
		});
	};
}

module.exports = solve;