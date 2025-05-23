
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
  
  
    $('.sc-works').mousemove(function(e){
    const areaOffset = $(this).offset();
    const posX = e.pageX - areaOffset.left;
    const posY = e.pageY - areaOffset.top;
    
      gsap.to('.bg-area-blue', {
        x: posX - 200,
        y: posY - 200,
        duration: 1,
        ease: "power3.out"
      });
  });
  
  
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
  
  
    function motionScroll(){
      var section = document.querySelector('.sc-motion');
      var wraps = section.querySelectorAll('.motion-wrap');
      var scrolled = window.scrollY;
      var sectionTop = section.offsetTop;
      var windowHeight = window.innerHeight;
      var distance = (scrolled + windowHeight) - sectionTop;
      
      if (distance >= 0) {
          var move = Math.min(distance * 0.09, 100);
  
          wraps[0].style.transform = `translateX(${move}px)`;  // 첫번째
          wraps[1].style.transform = `translateX(${-move}px)`; // 두번째
      } else {
          wraps[0].style.transform = 'translateX(0)';
          wraps[1].style.transform = 'translateX(0)';
      }
  }
  
  window.addEventListener('scroll', motionScroll);
  window.addEventListener('load', motionScroll);
  
  
  
  
  
  
  
    // mailslideLoop = gsap.to('.link-area',2,{
    //   xPercent:-50,
    //   repeat:-1,
    //   ease:'none'
    // })
    
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
  
  
  
      
