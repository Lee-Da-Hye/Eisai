const navBar = document.getElementById('navBar');
const logoImg1 = document.querySelector('.logoColor');
const logoImg2 = document.querySelector('.logoWhite');


window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >=600) {
    navBar.classList.add('scroll');
    navBar.style.backgroundColor = 'white';
    logoImg2.style.display = 'block'
    logoImg1.style.display = 'none'
  } else {
    navBar.classList.remove('scroll');
    navBar.style.backgroundColor = 'transparent';
    logoImg1.style.display = 'block'
    logoImg2.style.display = 'none'
  }
};

//let a = document.querySelectorAll('.lnb>li>a');
