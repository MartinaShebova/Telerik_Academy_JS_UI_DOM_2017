function solve() {
	return function (selector, defaultLeft, defaultRight) {
		var wrapper = document.querySelector(selector);
		defaultLeft = defaultLeft || [];
		defaultRight = defaultRight || [];

		//create column container
		var columnContainer = document.createElement('div');
		columnContainer.className = 'column-container';

		//two elements - divs with class column

		//Div ONE
		var divOne = document.createElement('div');
		divOne.className = 'column';

		var selectDiv = document.createElement('div');
		selectDiv.className = 'select';

		var radioInput = document.createElement('input');
		radioInput.setAttribute('type', 'radio');
		radioInput.setAttribute('name', 'column-select');
		radioInput.setAttribute('id', 'select-left-column');

		var label = document.createElement('label');
		label.setAttribute('for', 'select-left-column');
		label.innerHTML = 'Add here';

		var ol = document.createElement('ol');
		var olLi = document.createElement('li');
		olLi.className = 'entry';

		var img = document.createElement('img');
		img.className = 'delete';
		img.src = 'imgs/Remove-icon.png';

		if (defaultLeft) {
			for (var i = 0; i < defaultLeft.length; i += 1) {

				var currentLeftLi = olLi.cloneNode(true);
				currentLeftLi.innerHTML = defaultLeft[i];

				var currentCloseImg = img.cloneNode(true);

				currentLeftLi.appendChild(currentCloseImg);
				ol.appendChild(currentLeftLi);
			}
		} else {
			var pureLi = olLi.cloneNode(true);
			pureLi.innerHTML = inputAdd.value;

			var pureImg = document.createElement('img');
				pureImg.className = 'delete';
				pureImg.src = 'imgs/Remove-icon.png';

			pureLi.appendChild(pureImg);
			ol.appendChild(pureLi);
		}

		selectDiv.appendChild(radioInput);
		selectDiv.appendChild(label);
		divOne.appendChild(selectDiv);
		divOne.appendChild(ol);

		//Div TWO
		var divTwo = document.createElement('div');
		divTwo.className = 'column';

		var selectDiv2 = document.createElement('div');
		selectDiv2.className = 'select';

		var radioInput2 = document.createElement('input');
		radioInput2.setAttribute('type', 'radio');
		radioInput2.setAttribute('name', 'column-select');
		radioInput2.setAttribute('id', 'select-right-column');

		var label2 = document.createElement('label');
		label2.setAttribute('for', 'select-right-column');
		label2.innerHTML = 'Add here';

		var olright = document.createElement('ol');

		if (defaultRight) {
			for (var k = 0; k < defaultRight.length; k += 1) {
				var olLiRight = document.createElement('li');
				olLiRight.className = 'entry';
				olLiRight.innerHTML = defaultRight[k];
				var imgRight = document.createElement('img');
				imgRight.className = 'delete';
				imgRight.src = 'imgs/Remove-icon.png';

				olLiRight.appendChild(imgRight);
				olright.appendChild(olLiRight);
			}
		}else{
			var pureSLi = olLi.cloneNode(true);
			pureSLi.innerHTML = inputAdd.value;

			var pureSImg = document.createElement('img');
				pureSImg.className = 'delete';
				pureSImg.src = 'imgs/Remove-icon.png';

			pureSLi.appendChild(pureSImg);
			ol.appendChild(pureSLi);
		}


		selectDiv2.appendChild(radioInput2);
		selectDiv2.appendChild(label2);
		divTwo.appendChild(selectDiv2);
		divTwo.appendChild(olright);

		//append input and button into column container
		columnContainer.appendChild(divOne);
		columnContainer.appendChild(divTwo);

		wrapper.appendChild(columnContainer);

		//create input and button for the column container
		var inputAdd = document.createElement('input');
		inputAdd.setAttribute('size', '40');
		var buttonAdd = document.createElement('button');
		buttonAdd.innerHTML = 'Add';

		//Adding items

		buttonAdd.addEventListener('click', function () {
			if (radioInput.checked) {
				if (inputAdd.value.trim()) {
					var newLi = document.createElement('li');
					newLi.className = 'entry';
					newLi.innerHTML = inputAdd.value;
					var newImg = document.createElement('img');
					newImg.className = 'delete';
					newImg.src = 'imgs/Remove-icon.png';

					newLi.appendChild(newImg);
					ol.appendChild(newLi);
					inputAdd.value = '';
				}
			}
			else if (radioInput2.checked) {
				if (inputAdd.value.trim()) {
					var newLiRight = document.createElement('li');
					newLiRight.className = 'entry';
					newLiRight.innerHTML = inputAdd.value;
					var newImg = document.createElement('img');
					newImg.className = 'delete';
					newImg.src = 'imgs/Remove-icon.png';

					newLiRight.appendChild(newImg);
					olright.appendChild(newLiRight);
					inputAdd.value = '';
				}
			}
			else {
				if (inputAdd.value.trim()) {
					var newLiDefault = document.createElement('li');
					newLiDefault.className = 'entry';
					newLiDefault.innerHTML = inputAdd.value;
					var newImg = document.createElement('img');
					newImg.className = 'delete';
					newImg.src = 'imgs/Remove-icon.png';

					newLiDefault.appendChild(newImg);
					ol.appendChild(newLiDefault);
					inputAdd.value = '';
				}
			}
		});

		//Remove elements
		ol.addEventListener('click', function (e) {
			var target = e.target;

			if (target.tagName === 'IMG') {
				target.parentNode.parentNode.removeChild(target.parentNode);
				inputAdd.value = target.parentNode.innerText;
			}
		});

		olright.addEventListener('click', function (e) {
			var target = e.target;

			if (target.tagName === 'IMG') {
				target.parentNode.parentNode.removeChild(target.parentNode);
				inputAdd.value = target.parentNode.textContent.trim();
			}
		});

		wrapper.appendChild(inputAdd);
		wrapper.appendChild(buttonAdd);
	};
}

// SUBMIT THE CODE ABOVE THIS LINE

if (typeof module !== 'undefined') {
	module.exports = solve;
}
