window.onload = function() {
    var button = document.querySelector('#prikazi');
    button.addEventListener('click', toggleNav);

    if (window.location.href.includes('index.html')) {
        var formButton = document.querySelector('#formButton');
        formButton.addEventListener('click', toggleForm);
    }
};