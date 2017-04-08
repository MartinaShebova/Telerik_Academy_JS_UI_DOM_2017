function solve() {
	return `<div id="tabs">
        <div class="tabs-control">

            <ul class="list list-titles">
                {{#each titles}}
                <li class="list-item">
                    <label for="{{link}}" class="title">{{text}}</label>
                {{/each}}
            </li>
            </ul>

            <ul class="list list-contents">
                {{#each contents}}
                <li class="list-item">
                    <input class="tab-content-toggle" id="{{link}}" name="tab-toggles" type="radio">
                    <div class="content">
                        {{{text}}}
                    </div>
                </li>
                {{/each}}
            </ul>
        </div>
    </div>`;
}

if(typeof module !== 'undefined') {
	module.exports = solve;
}
