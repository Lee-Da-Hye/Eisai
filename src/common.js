const navBar = document.querySelector('#navBar');
const logoImg1 = document.querySelector('.logoColor');
const logoImg2 = document.querySelector('.logoWhite');
$(window).on('scroll', ()=>{

  if(window.scrollY > 600){
    navBar.addClass('scroll');
    navBar.css('backgroundColor', 'white');
    logoImg1.css('display', 'none');
    logoImg2.css('display', 'block');
  }else{
    navBar.removeClass('scroll');
    navBar.css('backgroundColor', 'trasnparent');
    logoImg1.css('display', 'block');
    logoImg2.css('display', 'none');
  }
})

