$(document).ready(function () {
    
    $('.header-strapline').sticky({zIndex:9})
    var mySwiper = new Swiper ('.swiper-container', {                

        // If we need pagsination
        pagination: '.swiper-pagination',

        // Navigation arrows
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        
    })        
});