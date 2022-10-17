window.onscroll = function showH () { 
  let header = document.querySelector('.header');

  if (window.pageYOffset > 450) {
    header.classList.add('header-fixed');
    }
  else {
        header.classList.remove('header-fixed');
    }

};