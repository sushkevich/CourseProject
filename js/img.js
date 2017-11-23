(function () {

    let number;
    let oldImg;

    document.getElementById('image').addEventListener('click', function (event) {
        if (event.target.tagName === 'IMG') {
            let imgUrl = event.target.currentSrc.split('/');
            let tag = document.createElement('img');
            tag.id = 'remove';
            tag.src = 'image/gallery/large/' + imgUrl[imgUrl.length - 1];
            number = imgUrl[imgUrl.length - 1];
            number = Number(number.replace('.jpg', ''));
            document.getElementById('modal').appendChild(tag);
            document.getElementById('modal').style.zIndex = '20';
            document.getElementById('modal').style.opacity = '1';
            document.getElementById('modal').style.height = '100%';
            document.getElementById('modal').style.width = '100%';
            document.getElementById('right').style.visibility = 'visible';
            document.getElementById('left').style.visibility = 'visible';
            if (number === 24) {
                document.getElementById('right').style.visibility = 'hidden';
            }
            if (number === 1) {
                document.getElementById('left').style.visibility = 'hidden';
            }
            if (number > 24) {
                document.getElementById('left').style.visibility = 'hidden';
                document.getElementById('right').style.visibility = 'hidden';
            }
        }
    });


    document.getElementById('modal').addEventListener('click', function (event) {

        if (event.target.id === 'cross') {
            let p = document.getElementById('modal');
            let ch = document.getElementById('remove');
            oldImg = p.removeChild(ch);
            document.getElementById('modal').style.zIndex = '-10';
            document.getElementById('modal').style.opacity = '0';
            document.getElementById('modal').style.height = '';
            document.getElementById('modal').style.width = '';
        }

        if (event.target.id === 'left') {
            let p = document.getElementById('modal');
            let ch = document.getElementById('remove');
            oldImg = p.removeChild(ch);
            let tag = document.createElement('img');
            tag.id = 'remove';
            number = Number(number) - 1;
            tag.src = 'image/gallery/large/' + number + '.jpg';
            document.getElementById('modal').appendChild(tag);
            if (number === 1) {
                document.getElementById('left').style.visibility = 'hidden';
            }
            if (number === 23) {
                document.getElementById('right').style.visibility = 'visible';
            }
        }

        if (event.target.id === 'right') {
            let p = document.getElementById('modal');
            let ch = document.getElementById('remove');
            oldImg = p.removeChild(ch);
            let tag = document.createElement('img');
            tag.id = 'remove';
            number = Number(number) + 1;
            tag.src = 'image/gallery/large/' + number + '.jpg';
            document.getElementById('modal').appendChild(tag);
            if (number === 2) {
                document.getElementById('left').style.visibility = 'visible';
            }
            if (number === 24) {
                document.getElementById('right').style.visibility = 'hidden';
            }
        }
    });
}());