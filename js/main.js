var slides = document.getElementsByClassName("slide");
var slideTexts =  document.getElementsByClassName("text-item");
var dots = document.getElementsByClassName("dot");
var info = document.getElementsByClassName("info");
var slideIndex = 1;
$(document).ready(function(){
    $("#navOpener").click(function(){
        $(".navigation").toggle();
    });
   
   if(screen.width > 480){
    initSlider(slideIndex, slides,slideTexts, dots);
    /* $(".slider").click(function(){
         slideIndex = nextSlide(slideIndex, slides,slideTexts,dots);
        
      });*/ 
   }
   

});

function getInfo(number){
    if(screen.width <= 480){
        $(info[number]).toggle();
    }
}
function getSlide(number){
    if(screen.width > 480){
    dots[slideIndex].classList.remove("active")
    slideTexts[slideIndex].style.display = "none";
    slides[slideIndex].style.display = "none";
    
    slides[number].style.display = "block";
    slideTexts[number].style.display = "block";
    dots[number].classList.add("active")
    slideIndex = number;
    }
}
 

function nextSlide(slideIndex, slides, slideTexts, dots) {
    slides[slideIndex].style.display = "none";
    slideTexts[slideIndex].style.display = "none";
    dots[slideIndex].classList.remove("active")
    if(slideIndex == slides.length-1){
        slides[0].style.display = "block";
        slideTexts[0].style.display = "block";
        dots[0].classList.add("active")
        return 0;
    }
       
    slides[++slideIndex].style.display = "block";
    slideTexts[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active")
    return slideIndex;
}

function initSlider(slideIndex, slides,slideTexts,dots) {
    for(var i = 0; i < slides.length; ++i){
        console.log(slides.length);
        slides[i].style.display = "none";
        slideTexts[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
    slideTexts[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active")
}

