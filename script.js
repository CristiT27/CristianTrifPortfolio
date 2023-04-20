//NAV burger responsive START

const navSlide = () =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector ('.nav-links');
    const navButtons = document.querySelector ('.nav-links a');
    const navLinks = document.querySelectorAll ('.nav-links li');
    

    burger.addEventListener('click' , () => {
      //Toggle Nav
      nav.classList.toggle('nav-active');
      
      //Burger Animation
      burger.classList.toggle('toggle');
      

      document.querySelector('#about-btn').onclick = () =>{
         nav.classList.remove('nav-active');
         burger.classList.remove('toggle');
      }
      document.querySelector('#skills-btn').onclick = () =>{
         nav.classList.remove('nav-active');
         burger.classList.remove('toggle');
      }
      document.querySelector('#projects-btn').onclick = () =>{
         nav.classList.remove('nav-active');
         burger.classList.remove('toggle');
      }
      document.querySelector('#contact-btn').onclick = () =>{
         nav.classList.remove('nav-active');
         burger.classList.remove('toggle');
      }


   });

    

    }

navSlide();




//NAV burger responsive END

//NAV scroll active START

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
   if (window.scrollY) {
      nav.classList.add('active_nav');
   } else {
      nav.classList.remove('active_nav');
   }


})

//NAV scroll active END

//Back to top

window.addEventListener('scroll' , function(){
   var scroll = document.querySelector('.scrollTop');
   scroll.classList.toggle("active" , window.scrollY > 500)
})

function scrollToTop(){
   window.scrollTo({
      top:0
   })
}


//Scroll progress


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

//About color slider

const left = document.getElementById("left-side");

const handleOnMove = e => {
   const p = e.clientX / window.innerWidth * 100;
   left.style.width = `${p}%`;
}

document.onmousemove = e => handleOnMove(e);

document.ontouchmove = e => handleOnMove(e.touches[0]); 


//Projects Slider

var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.btn');
let currentSlide = 1;

var manualNav = function(manual){
   slides.forEach((slide) => {
      slide.classList.remove('active');
   });
   btns.forEach((btn) => {
      btn.classList.remove('active');
   })
   slides[manual].classList.add('active');
   btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
   btn.addEventListener("click", () => {
      manualNav(i);
      currentSlide = i;
   });
});

//Slider AutoPlay

var repeat = function(activeClass){
   let active = document.getElementsByClassName('active');
   let i = 1;


var repeater = () => {
   setTimeout (function(){

      [...active].forEach((activeSlide) => {
         activeSlide.classList.remove('active');
      })


      slides[i].classList.add('active');
      btns[i].classList.add('active');
      i++;

      if(slides.length == i){
         i=0;
      }
      if(i >= slides.length){
         return;
      }
      repeater();
   }, 10000);
}
repeater(); 

}
repeat();