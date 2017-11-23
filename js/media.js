let n = 0;
document.getElementById('nav').addEventListener('click', function () {
    if (n === 0) {
        document.getElementById('menu').style.visibility = 'visible';
        n++;
        console.log(n);
    } else {
        document.getElementById('menu').style.visibility = 'hidden';
        n = 0;
        console.log(n);
    }

});
