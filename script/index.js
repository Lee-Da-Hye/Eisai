
//a 이동 x
const alink = document.querySelectorAll('footer a')
        alink.forEach(link =>{
            link.addEventListener('click', function (event){
                event.preventDefault();
            })
        })


// aside
var $html = $("html");

var curIdx = 0;
//뷰포트에 표시되는 페이지의 번호

var lastIdx = $("section").length;
// 마지막 페이지의 번호 

$html.animate({scrollTop: 0},1000);
//문서(페이지)가 로드되면 첫 페이지 시작

$(window).on("wheel", function(e){
//이벤트 핸들러로 마우스 휠을 굴리면 발생하는 이벤트

if($html.is(":animated")) return;
//아래에서 호출된 .animate 메서드로 생성된 스크롤 효과가 쌓이지 않도록 스크롤이 진행되는 동안 발생하는 wheel이벤트는 무시한다.

//e(jQuery가 반환) .originalEvent(자바스크립트에서의 원래 이벤트) .deltaY(마우스 휠을 어느 방향으로 얼만큼을 굴렸는지 → 양수이면 아래쪽으로 굴린 거, 음수이면 위쪽으로 굴린 거다)
if(e.originalEvent.deltaY > 0){
  
  //마지막 페이지인 경우에는 이벤트 핸들러 종료(스크롤될 것이 없으니 마지막에서 멈춰!!)
  if(curIdx== lastIdx) return;

  curIdx++; //스크롤을 아래로 했으면 페이지 +1, 위로 올렸으면 -1씩 시키기 
}else if(e.originalEvent.deltaY < 0){

  //첫 번째 페이지인 경우에도 이벤트 핸들러 종료(올라갈 곳이 없으니 첫 번째에서 멈춰!!)
  if(curIdx == 1) return;

  curIdx--; //스크롤을 아래로 했으면 페이지 +1, 위로 올렸으면 -1씩 시키기 
}
var posTop = (curIdx-1) * $(window).height(); //이동할 페이지의 번호에 스크롤할 위치 계산

$html.animate({scrollTop : posTop}); //계산한 위치로 이동
});


var sections = $('section')
, nav = $('.fixed')
, nav_height = nav.outerHeight();

$(window).on('scroll', function () {
var cur_pos = $(this).scrollTop();

sections.each(function() {
  var top = $(this).offset().top - nav_height,
      bottom = top + $(this).outerHeight();
  
  if (cur_pos >= top && cur_pos <= bottom) {
    nav.find('a').removeClass('active');
    sections.removeClass('active');
    
    $(this).addClass('active');
    nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
  }
});
});

nav.find('a').on('click', function () {
  var $el = $(this)
    , id = $el.attr('href');
  
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 500);
  
  return false;
});

// 휠 제거

var cachedWidth = $(window).width();
    $(window).resize(function(){
      var newWidth = $(window).width();
      if(newWidth !== cachedWidth){
        let bw = $("body").width();
        $(window).resize(function(){
            bw = $("body").width();
            console.log(bw);
        });
        function react() {
          if (bw >= 801) { $(window).on('wheel');}
          else { $(window).off('wheel');}
          }
        react();

        $(window).resize(
          function(){
            react();  
        })
        $(window).resize(function(){document.location.reload();})
              //새로고침 코드================
              var delay = 300;//resize 종료 후 0.3초마다 새로 고침
              var re_timer = null;
              $(window).on('resize', function(){
                  clearTimeout(re_timer);
                  re_timer = setTimeout(function(){
                  document.location.reload();
                  }, delay);
              });
              //===================
                  cachedWidth = newWidth;
              }
    });