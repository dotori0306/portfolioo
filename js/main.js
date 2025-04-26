
$(function(){


//header menu

  $('.menu-area a').click(function(e){
    e.prevetDefault();
    target = $(this).attr('href');
    offset = $(target).offset().top;

    gsap.to('html,body',{
      scrollTop:offset,
    })
  })


  gsap.to('header .guage',{
    scrollTrigger:{
      trigger:'body',
      start:"top top",
      end:"bottom bottom",
      scrub:1,
    },
    width:'100%',
  })



  //main
  let cursor = gsap.to('.cursor',{
    opacity: 0,
    ease:"power4.inout",
    repeat: -1,
  })

  gsap.to('.title-txt',{
  text : "{ 'WEB PUBLISHER' }",
  delay: 1,
  duration: 2,
  repeat: -1,
  repeatDelay: 1,
  yoyo: 'true',
})


  gsap.set('.bg-area',{
    x:-window.innerWidth/2,
    y:-window.innerWidth/2,
  })
$('.sc-visual').mousemove(function(e){
    gsap.to('.bg-area',{
      x:e.offsetX/5 - window.innerWidth/2,
      y:e.offsetY/5 - window.innerWidth/2,
      duration:1,
      ease:'none',
    })
  })


  // $('.sc-works').mousemove(function(e){

  //   gsap.to('.bg-area-blue',{
  //     x:e.offsetX-200,
  //     y:e.offsetY-200,
  //     duration: 1,
  //   })
  // })

  $('.cont a').hover(function(e){
    $(this).toggleClass('on');
  })

  $('.cont').mousemove(function(e){
    gsap.to('.bg-area-blue',{
      x:e.clientX-50,
      y:e.clientY-50,
      opacity:1,
      scale:1,
      duration:0.3,
    })
  })

  $('.cont').mouseleave(function(e){
    gsap.to('.bg-area-blue',{
      scale:0,
      opacity:0,
    })
  })


  $('[data-fade]').each(function(){

    gsap.fromTo($(this),{
      scale:0.5,
      opacity:0.5
    },{
      
      scrollTrigger:{
        trigger:$(this),
        start:"top bottom",
        end:"bottom top",
        // markers:true,
      },
      scale:1,
      opacity:1,
    })
  })





  //footer
  slideLoop = gsap.to('.contact-wrap',15,{
    xPercent:-50,
    repeat:-1,
    ease:'none',
    paused:true,
  
  })
  
  slideLoop.play()

  
  // mailslideLoop paused();


  
  
 
//  const gridrow = 10;
//  const gridWidth = $('.grid-box').outerWidth();
//  const gridHeight = $('.grid-box').outerHeight();
//   for (let i = 1; i <= gridrow; i++) {
//     const result = Math.floor ((i/gridrow)*100);
//     $('.grid-box').append(`<i class="vt-line" style="left:${result}%"></i>`)
//   }



//   const gridcol = 10;
//    for (let i = 1; i <= gridrow; i++) {
//      const result = Math.floor ((i/gridrow)*100);
//      $('.grid-box').append(`<i class="hr-line" style="top:${result}%"></i>`)
//    }
 

    

//지우지마세용
})



    
