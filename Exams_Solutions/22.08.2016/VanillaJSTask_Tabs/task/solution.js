function solve() {
    return function (selector, tabs) {
        var wrapper = document.querySelector(selector);

        //tabs

        var ul = document.createElement("ul");
        ul.className = "tabs-nav";
        var li = document.createElement("li");

        for (var i = 0; i < tabs.length; i += 1) {

            var currentLi = li.cloneNode(true);
            var a = document.createElement("a");
            a.className = "tab-link";
            a.innerHTML = tabs[i].title;
            a.setAttribute("title", tabs[i].title);
            currentLi.appendChild(a);
            ul.appendChild(currentLi);
        }

        wrapper.appendChild(ul);

        //tabs content

        var contentUl = document.createElement("ul");
        contentUl.className = "tabs-content";
        var contentLi = document.createElement("li");
        contentLi.className = "tab-content";
        var p = document.createElement("p"),
            button = document.createElement("button");
        button.className = "btn-edit";
        button.innerHTML = "Edit";

        for (var j = 0; j < tabs.length; j += 1) {
            var contentTabLi = contentLi.cloneNode(true),
                contentP = p.cloneNode(true);
            if (j === 0) {
                contentTabLi.className += " visible";
            }
            contentP.innerHTML = tabs[j].content;
            contentP.setAttribute("title", tabs[j].title);
            var saveEditButton = button.cloneNode(true);
            contentTabLi.appendChild(contentP);
            contentTabLi.appendChild(saveEditButton);
            contentUl.appendChild(contentTabLi);
        }

        wrapper.appendChild(contentUl);

        //Behavior Part

        //Show content when click on a
        HTMLElement.prototype.removeClass = function (remove) {
            var newClassName = "";
            var m;
            var classes = this.className.split(" ");
            for (m = 0; m < classes.length; m++) {
                if (classes[m] !== remove) {
                    newClassName += classes[m] + " ";
                }
            }
            this.className = newClassName;
        };

        var getUltab = document.getElementsByClassName("tabs-nav")[0],
            getUlContent = document.getElementsByClassName("tabs-content")[0];

        getUltab.addEventListener('click', function (e) {
            var target = e.target;

            if (target.tagName === "A") {

                for (var k = 0; k < getUlContent.childNodes.length; k += 1) {

                    if (getUlContent.childNodes[k].firstChild.getAttribute("title") === target.getAttribute("title")) {
                        getUlContent.childNodes[k].className += " visible";
                    } else {
                        getUlContent.childNodes[k].removeClass("visible");
                    }
                }
            }
        });

        //Show textarea
        var textarea = document.createElement("textarea");
            textarea.className = "edit-content";
        var ULLLL = document.getElementsByClassName("tabs-content")[0];

        ULLLL.addEventListener('click', function (event) {
            var target = event.target;

            if (target.tagName === "BUTTON" && target.innerHTML === "Edit") {
                target.innerHTML = "Save";
                var clonedTextarea = textarea.cloneNode(true);
                clonedTextarea.value = target.previousElementSibling.innerHTML;
                target.parentNode.appendChild(clonedTextarea);
            }
            else if (target.tagName === "BUTTON" && target.innerHTML === "Save"){
                target.previousElementSibling.innerHTML = target.nextElementSibling.value;
                target.parentNode.removeChild(target.nextElementSibling);
                target.innerHTML = "Edit";
            }
        });
    };
}

if (typeof module !== "undefined") {
    module.exports = solve;
}