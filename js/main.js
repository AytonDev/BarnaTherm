/**
 * Slider
 */
var slides = document.getElementsByClassName("slide");
var slideTexts =  document.getElementsByClassName("text-item");
var dots = document.getElementsByClassName("dot");
var info = document.getElementsByClassName("info");
var lastOpen=-1;
var slideIndex = 3;
/**
 * vysouvací dick
 */
var currentPosition = 0;
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
            $(".services-nav").stop().animate({"marginTop": ($(window).scrollTop()) + "px", "marginLeft":($(window).scrollLeft()) + "px"}, "fast" );
        }
       else {
        $(".services-nav").removeClass("scroll-fixed");
        $(".services-nav").stop().css({"marginTop": 0+ "px", "marginLeft":0 + "px"} );
        
         }      
    });

   if(screen.width > 480)
        initSlider(slideIndex, slides,slideTexts, dots);
    
    $(".tile-frame").click(function(){
        var itemID= $(this).closest('[data-index]').data('index');
        if(itemID === currentPosition)
            return;
        else {
            $(".tiles").find('[data-index="' + currentPosition + '"]').children(".tile-text").removeClass("tile-text-active");
            $(".tiles").find('[data-index="' + currentPosition + '"]').removeClass("tile-active");
            $(this).children(".tile-text").addClass(" tile-text-active");
            $(this).addClass("tile-active");
            currentPosition = itemID;
        }    

    });
   
   

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

/**
 * Vysouvací dick
 */
