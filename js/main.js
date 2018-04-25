var slides = document.getElementsByClassName("slide");
var slideTexts =  document.getElementsByClassName("text-item");
var dots = document.getElementsByClassName("dot");
var info = document.getElementsByClassName("info");
var lastOpen=-1;
var slideIndex = 3;
$(document).ready(function(){
    $("#navOpener").click(function(){
        $(".navigation").slideToggle("slow");
    });

    $(window).scroll(function(){
        if($(window).scrollTop() > 450) {
            $(".fire").addClass("move");
            $(".snow").addClass("move");
        }
           
        if($(window).scrollTop() > 300) {
            $(".services-nav").addClass("scroll-fixed");
            $(".services-nav").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "slow" );
        }
         
       else {
        $(".services-nav").stop().animate({"marginTop": 0+ "px", "marginLeft":0 + "px"}, "fast" );
        $(".services-nav").removeClass("scroll-fixed");
    }
            
      });



   
   if(screen.width > 480)
    initSlider(slideIndex, slides,slideTexts, dots);
   
   

});
function startSlider() {
    if(screen.width > 480)
    setInterval(nextSlide, 5000);
}

function getInfo(number){
    if(screen.width <= 480){
        if(lastOpen != number && lastOpen !=-1)
            $(info[lastOpen]).slideToggle("slow");
        if(lastOpen == number)
                lastOpen = -1;  
        else 
            lastOpen = number;                  
        $(info[number]).slideToggle("slow");
        
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
 

function nextSlide() {
    slides[slideIndex].style.display = "none";
    slideTexts[slideIndex].style.display = "none";
    dots[slideIndex].classList.remove("active")
    if(slideIndex == slides.length-1){
        slideIndex=0;
    }else 
     ++slideIndex;
       
    slides[slideIndex].style.display = "block";
    slideTexts[slideIndex].style.display = "block";
    dots[slideIndex].classList.add("active");
    //return slideIndex;
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

