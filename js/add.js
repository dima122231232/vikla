var vh = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
var vw = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
var indexJs = vh / 100 + vw / 100;
var currentSlide = 1;
var isScrolling = false,i = true,b=false,a=false,g= false;

console.log(indexJs);

document.addEventListener("DOMContentLoaded", function() {
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
    gsap.fromTo('.vikla, .sumy', { y: 150 }, { y: 0, duration: 1.2, delay: 1 });
    setTimeout(function() {scrollToHeader();}, 3000);

    document.addEventListener('wheel', function (event) {
        if (isScrolling) return;
        var delta = event.deltaY || event.detail || event.wheelDelta;

        if (delta > 0) {currentSlide = Math.min(currentSlide + 1, document.querySelectorAll('.slide').length);
        } else {currentSlide = Math.max(currentSlide - 1, 1);}
        if (currentSlide == 1){gsap.fromTo('.nav', { y:0 }, { y:-.4*vh, duration: 1.2 });a=true;}
        if (currentSlide == 2 && a==true){;gsap.fromTo('.nav', { y:-.4*vh }, { y:0, duration: 1 });}
        if (currentSlide == 2){b=false}
        if (currentSlide == 2 && g){we();g=false}
        if (currentSlide == 3){article();a=false;g=true} 
        if (currentSlide == 4){section()}
        isScrolling = true;

        window.scrollTo({top: (currentSlide - 1) * window.innerHeight,behavior: 'smooth'});

        setTimeout(function() {
            isScrolling = false;
        }, 1000); 
    });
});

function scrollToHeader() {
    document.querySelector('.header').scrollIntoView({ behavior: 'smooth' });
    gsap.fromTo('.nav', { marginTop:"-100vh" }, { marginTop:0, duration: 1.2 });
    gsap.fromTo('.header__block', { x: -200 }, { x: 0, duration: 1.2 });
    gsap.fromTo('.header__h2', { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, delay: 0.6 });
    gsap.fromTo('.header__p', { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, delay: 0.8 });
    gsap.fromTo('.header__pasta', { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 });
}
function we() {
    gsap.fromTo('.header__block', { x: -200 }, { x: 0, duration: 1.2 });
    gsap.fromTo('.header__h2', { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.8, delay: 0.6 });
    gsap.fromTo('.header__p', { x: -40, opacity: 0 }, { x: 0, opacity: 1, duration: 0.6, delay: 0.8 });
    gsap.fromTo('.header__pasta', { x: 200, opacity: 0 }, { x: 0, opacity: 1, duration: 1.2 });
}
function article() {
    if (i){
        gsap.fromTo('.spageti-1',{x:-350,rotate:'-45deg',opacity:0},{x:0,duration:1,rotate:'0',opacity:1,delay:.5})
        gsap.fromTo('.spageti-2',{x:350,rotate:'45deg',opacity:0},{x:0,duration:1,rotate:'0',opacity:1,delay:.5})
        gsap.fromTo('.article__blocks-1',{x:-350,opacity:0},{x:0,duration:1,opacity:1,delay:.8})
        gsap.fromTo('.article__blocks-2',{x:350,opacity:0},{x:0,duration:1,opacity:1,delay:.8})
        gsap.fromTo('.article__gf',{y:350,opacity:0},{y:0,duration:1,opacity:1,delay:1.1});i = false;}
    if (b){
        gsap.fromTo('.spageti-1',{y:-300,},{y:0,duration:.6,})
        gsap.fromTo('.spageti-2',{y:-300,},{y:0,duration:.6,})
        gsap.fromTo('.article__blocks-1',{x:-350,},{x:0,duration:1,})
        gsap.fromTo('.article__blocks-2',{x:350,},{x:0,duration:1,})
        gsap.fromTo('.article__gf',{y:100,opacity:0},{y:0,duration:.6,opacity:1,})}
        gsap.fromTo('.header__block', { x: 0 }, { x: -200, duration: .6});
        gsap.fromTo('.header__h2', { x: 0,  }, { x: -40, duration: 0.8});
        gsap.fromTo('.header__p', { x: 0,  }, { x: -40, duration: 0.6});
        gsap.fromTo('.header__pasta', { x: 0,  }, { x: 200, duration: .6});
}
function section() {
     gsap.fromTo('.spageti-1',{y:0,},{y:-300,duration:.6,})
     gsap.fromTo('.spageti-2',{y:0,},{y:-300,duration:.6,})
     gsap.fromTo('.article__blocks-1',{x:0,},{x:-350,duration:1,})
     gsap.fromTo('.article__blocks-2',{x:0,},{x:350,duration:1,})
     gsap.fromTo('.article__gf',{y:0,opacity:1},{y:100,duration:.6,opacity:0,})
     b=true
}