window.onload = function() {
    var button = document.querySelector('#prikazi');
    button.addEventListener('click', toggleNav);
  
    if (
      window.location.href.includes('index.html') ||
      window.location.pathname === '/mobile-shop/'
    ) {
      var formButton = document.querySelector('#formButton');
      formButton.addEventListener('click', toggleForm);
    }
  };