$(document).ready(function(){
   $(window).scroll(function(){
     if(this.scrollY > 20){
        $(".navbar").addClass("sticky");
     }else{
          $(".navbar").removeClass("sticky");
     }
     if(this.scrollY > 500){
        $(".scroll-up-btn").addClass("shwo");   
     }else{
        $(".scroll-up-btn").removeClass("shwo"); 
     }
 });


//  slide-up script

$(".scroll-up-btn").click(function(){
    $('html').animate({scrollTop: 0});
}); 




    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.menu-btn .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


//  typing Animation script
var typed = new Typed(".typing", {
    strings: ["Développeur", "Blogueur","Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed(".typing-2", {
    strings: ["Développeur", "Blogueur","Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

    // ow carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false
            },
            0:{
                items:3,
                nav:false
            }
        }

    });

});