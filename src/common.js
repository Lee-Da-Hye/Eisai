$window.on('scroll', ()=>{
  let navbar = $('#navbar');
  if(window.scrollY > 600){
    navbar.addClass('scroll');
    navbar.css('backgroundColor', 'white');
    
  }else{
    navbar.removeClass('scroll');
    navbar.css('backgroundColor', 'trasnparent');
  }
})

