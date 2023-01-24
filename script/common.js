const navBar = document.getElementById('navBar');
const logoImg1 = document.querySelector('.logoColor');
const logoImg2 = document.querySelector('.logoWhite');
const ham = document.querySelector('.ham-btn');
const hamSpan = document.querySelectorAll( '.ham-btn > span' );
/*const hamSpan1 = document.querySelector('.hamTop');
const hamSpan2 = document.querySelector('.hamMid');
const hamSpan3 = document.querySelector('.hamBot');*/


window.onscroll = function() {
  "use strict";
  if (document.body.scrollTop >= 600 || document.documentElement.scrollTop >=600) {
    navBar.classList.add('scroll');
    navBar.style.backgroundColor = 'white';
    logoImg2.style.display = 'block';
    logoImg1.style.display = 'none';
    hamSpan[0].style.backgroundColor = 'black';
    hamSpan[1].style.backgroundColor = 'black';
    hamSpan[2].style.backgroundColor = 'black';
  } else {
    navBar.classList.remove('scroll');
    navBar.style.backgroundColor = 'transparent';
    logoImg1.style.display = 'block';
    logoImg2.style.display = 'none';
    hamSpan[0].style.backgroundColor = 'white';
    hamSpan[1].style.backgroundColor = 'white';
    hamSpan[2].style.backgroundColor = 'white';
  }
};

//햄버거버튼 
ham.addEventListener('click', showNavi)

function showNavi() {
    document.querySelector('.ham-navigation').classList.toggle('active');
}

//아코디언

  const acTitles = document.querySelectorAll('.ham-title');
  // const contents = document.querySelectorAll('.content');
  // const bxs = document.querySelectorAll('.bx');

  acTitles.forEach(function(title, index){
      title.addEventListener('click', function(){
          const content = title.nextElementSibling.nextElementSibling; 
          // console.log(content);
          content.classList.toggle('active');

          const firstI = title.firstElementChild;
          // console.log(firstI);

          if( firstI.classList.contains('bx-caret-down')){
              firstI.classList.remove('bx-caret-down');
              firstI.classList.add('bx-caret-up');
          }else{
              firstI.classList.add('bx-caret-down');
              firstI.classList.remove('bx-caret-up');
          }  
      })
  })