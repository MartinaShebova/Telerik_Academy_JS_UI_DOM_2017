/* globals document, window, console */

function solve() {
    return function (selector, initialSuggestions) {

        var wrapper = document.querySelector(selector);

            initialSuggestions = initialSuggestions || [];

        var getButton = document.getElementsByClassName("btn-add")[0],
            getUl = document.getElementsByClassName('suggestions-list')[0],
            getInput = document.getElementsByClassName('tb-pattern')[0];

        var li = document.createElement('li');
            li.className = "suggestion";
            li.style.display = "none";
        var a = document.createElement('a');
            a.className = "suggestion-link",
            a.setAttribute('href', '#');
        li.appendChild(a);

        var getAllAnchor = document.getElementsByClassName('suggestion-link');

        //Adding unique array suggestions
        var uniqueValues = [];

        for (let i = 0; i < initialSuggestions.length; i += 1) {
            var currentToLowerCase = initialSuggestions[i].toLowerCase();

            if (uniqueValues.indexOf(currentToLowerCase) < 0) {
                uniqueValues.push(currentToLowerCase);

                var arrayLi = li.cloneNode(true);
                    arrayLi.firstChild.innerHTML = initialSuggestions[i];
                getUl.appendChild(arrayLi);
            }
        }

        //Entering string for autocomplete
        getInput.addEventListener('input', function(e){

            var target = e.target;

            for(let i = 0; i < getAllAnchor.length; i += 1)
            {
                if(target.value.length === 0){
                    getAllAnchor[i].parentNode.style.display = "none";
                    continue;
                }

                if(getAllAnchor[i].innerHTML.toLowerCase().indexOf(target.value.toLowerCase()) >= 0){
                    getAllAnchor[i].parentNode.style.display = "";
                }
                else{
                    getAllAnchor[i].parentNode.style.display = "none";
                }
            }
        });

        //Adding suggestions from user input
        getButton.addEventListener('click', function () {
            
            var inputToLowerCase = getInput.value.toLowerCase();

            if (uniqueValues.indexOf(inputToLowerCase) < 0) {
                uniqueValues.push(inputToLowerCase);

                var arrayLi = li.cloneNode(true);
                    arrayLi.firstChild.innerHTML = getInput.value;
                getUl.appendChild(arrayLi);
            }
        });

        //Display <a> innerHTML in as input value
        getUl.addEventListener('click', function(e){
            var target = e.target;

            if(target.tagName === "A"){
                getInput.value = target.innerHTML;
            }
        });
    };
}

module.exports = solve;