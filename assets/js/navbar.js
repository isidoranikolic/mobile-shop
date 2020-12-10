function toggleNav() {
    var e = document.querySelector('#navbar'),
        t = document.querySelector('#omot');

    '0px' == e.style.left ?
        ((e.style.left = '-300px'), (t.classList = '')) :
        ((e.style.left = '0px'), (t.classList = 'open'));
}