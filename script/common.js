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
const hamTitles = document.querySelectorAll('.ham-title');
        console.log(hamTitles);
        
        const hamContents = document.querySelectorAll('.ham-lnb .ham-subnav');
        console.log(hamContents);
        //nodeList 유사배열, 이터러블하므로 번호를 사용할 수 있다.

        let currentTitle;
        //클릭된 제목을 제어
        hamTitles.forEach(function(title, index){
            title.addEventListener('click', function(event){
                //이전에 클릭되서 active를 갖고 있는 것을 빼고
                if(currentTitle){
                    currentTitle.classList.remove('active');
                    currentTitle.nextElementSibling.classList.remove('active');
                }
                //현재 클릭되서 active를 넣어주기
                event.target.classList.add('active');
                event.target.nextElementSibling.classList.add('active');
                
                currentTitle = event.target;
                
            })
        })