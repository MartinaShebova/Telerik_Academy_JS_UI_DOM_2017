/* globals module */
function solve() {
	return function (selector, items) {
		var root = document.querySelector(selector);

		//Creating left and right div containers
		var leftDiv = document.createElement('div');
		leftDiv.style.width = '70%';
		leftDiv.style.display = 'inline-block';
		leftDiv.style.cssFloat = 'left';
		var rightDiv = document.createElement('div');
		rightDiv.style.width = '30%';
		rightDiv.style.display = 'inline-block';
		rightDiv.style.cssFloat = 'right';
		rightDiv.style.overflow = 'scroll';
		rightDiv.style.height = '500px';

		//Creating input field and p for filter word
		var filterLabel = document.createElement('p');
		filterLabel.style.textAlign = 'center';
		filterLabel.style.fontWeight = 'bold';
		filterLabel.innerHTML = 'Filter';
		var input = document.createElement('input');
		input.style.display = 'inline-block';

		rightDiv.appendChild(filterLabel);
		rightDiv.appendChild(input);

		//Fill the right container
		for (var i = 0; i < items.length; i += 1) {
			var animalHolder = document.createElement('div');
				animalHolder.className = 'image-container';
			var animalTitle = document.createElement('p');
				animalTitle.style.textAlign = 'center';
				animalTitle.style.fontWeight = 'bold';
				animalTitle.innerHTML = items[i].title;
			var animalImage = document.createElement('img');
				animalImage.src = items[i].url;
				animalImage.style.width = '80%';
				animalImage.style.borderRadius = '10px';
				animalHolder.appendChild(animalTitle);
				animalHolder.appendChild(animalImage);
				rightDiv.appendChild(animalHolder);
		}

		//Fill the left div
		var bigPicTitleDiv = document.createElement('div');
			bigPicTitleDiv.className = 'image-preview';
		var bigPicTitle = document.createElement('p');
			bigPicTitle.style.textAlign = 'center';
			bigPicTitle.style.fontWeight = 'bold';
			bigPicTitle.innerHTML = items[0].title;

		var bigPicture = document.createElement('img');
			bigPicture.src = items[0].url;
			bigPicture.style.width = '500px';
			bigPicture.style.height = '500px';
			bigPicture.style.borderRadius = '10px';
		
		bigPicTitleDiv.appendChild(bigPicTitle);
		bigPicTitleDiv.appendChild(bigPicture);
		leftDiv.appendChild(bigPicTitleDiv);

		//Hover functionality

			rightDiv.addEventListener('mouseover', function(e){
				var target = e.target;
					if(target.className === 'image-container'){
						target.style.background = 'pink';
					}
			});

			rightDiv.addEventListener('mouseout', function(e){
				var target = e.target;
					if(target.className === 'image-container'){
						target.style.background = 'white';
					}
			});
		
		//When click change the bigger image with the one from the right container

			rightDiv.addEventListener('click', function(e){
				var target = e.target;
					if(target.tagName === 'IMG'){
						bigPicTitle.innerHTML = target.previousElementSibling.innerHTML;
						bigPicture.src = target.src;
					}
			});

		//Filter functionality

		input.addEventListener('input', function(e){
			var target = e.target;
			var value = target.value;

				for(var k = 0; k < rightDiv.childNodes.length; k += 1)
				{
					if(rightDiv.childNodes[k].className === "image-container"){

						if(rightDiv.childNodes[k].firstChild.innerHTML.toLowerCase().indexOf(value.toLowerCase()) > 0){
							console.log(5555555555);
							rightDiv.childNodes[k].style.display = 'block';
						}
						else
						{
							rightDiv.childNodes[k].style.display = 'none';
						}
					}
				}
		});

		//Append to the root element
		root.appendChild(leftDiv);
		root.appendChild(rightDiv);
	};
}

module.exports = solve;