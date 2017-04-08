function solve() {
    return function (filesMap) {
        var $ul = $('.items'),
            $p = $('.file-content'),
            $liDir = $('li.dir-item.item.collapsed'),
            $plusButton = $('.visible');

        //Show file contents
        $ul.on('click', 'a.item-name', function () {
            var $this = $(this);
            if (filesMap.hasOwnProperty($this.text())) {
                $p.text(filesMap[$this.text()]);
            }
            else{
                 $p.text('');
            }
        });

        //Toggle directory collapsing
        $liDir.on('click', 'a', function () {
            var $this = $(this);
            $this.parent().toggleClass('collapsed');
        });

        //Deleting items

        $ul.on('click', 'a.del-btn', function () {
            var $this = $(this);
            $this.parent().remove();
        });

        //Adding new files
        $plusButton.on('click', function () {
            var $this = $(this);
            $this.removeClass('visible');
            $this.next().addClass('visible');
        });

        $('input').on('keydown', function (e) {
            if (e.keyCode !== 13) {
                return;
            }

            var $this = $(this);

            if ($this.val().includes('/')) {
                var splittedInput = $this.val().split('/');

                var dirs = $ul.find('li.dir-item.item > a.item-name');

                dirs.each(function (index, el) {
                    el = $(el);
                    if (splittedInput[0] === el.html()) {
                        $plusButton.toggleClass('visible');
                        $('input').toggleClass('visible');
                        el.append(renderList(splittedInput[1]));
                        $('input').val('');
                    }
                });
            } else {
                $plusButton.toggleClass('visible');
                $('input').toggleClass('visible');
                $('.file-explorer').children().last().append(renderList($('input').val()));
                $('input').val('');
            }
        });

        function renderList(html) {
            var $newli = $('<li />').addClass('file-item item');
            var $newA = $('<a />').addClass('item-name').text(html);
            var $newTrashButton = $('<a/>').addClass('del-btn');
            $newA.appendTo($newli);
            $newTrashButton.appendTo($newli);
            return $newli;
        }
    };
}

if (typeof module !== 'undefined') {
    module.exports = solve;
}