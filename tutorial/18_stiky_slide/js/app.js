$(function () {
    // load page
    $('.header').load('../inc/header.html')
    $('.footer').load('../inc/footer.html')

    // slide
    $('.slide').slick({
        dots: true,
        nextArrow : $('.next'),
        prevArrow : $('.prev'),
        autoplay: true,
        autoplaySpeed: 5000
    }) 

    $('.slide_02').slick({
        dots: true,
        arrows: false
    })  
    
    $('.big_banner').parallax({ imageSrc: '../../images/slide_03.jpg' });

    ScrollReveal().reveal('.title_01', {
        distance : '50px',
        origin : 'right',
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.card_01', {
        distance : '50px',
        origin : 'left',
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.card_02', {
        distance : '50px',
        origin : 'right',
        easing: 'ease-in-out'
    });

    ScrollReveal().reveal('.card_03', {
        distance : '50px',
        origin : 'bottom',
        easing: 'ease-in-out',
        delay: 500
    });

    ScrollReveal().reveal('.card_04', {
        distance : '50px',
        origin : 'top',
        easing: 'ease-in-out',
        delay: 500
    });

    ScrollReveal().reveal('.big_banner .text', {
        distance : '100px',
        origin : 'top',
        easing: 'ease-in-out',
    });
})