function toggleForm() {
    var e = document.querySelector('#side-form');

    e.classList.length ? (e.classList = '') : (e.classList = 'open');
}