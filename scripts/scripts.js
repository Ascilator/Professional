jQuery(function () {

    $('._with_add').on('click', function () {
        if ($('html').width() < 850) {
            $('._with_add').not(this).children('.link_body').slideUp();
            $(this).children('.link_body').slideToggle();
        }
    })

    $('.slider_wy_we_body').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: $('.slider_wy_we_controls').children().eq(1),
        prevArrow: $('.slider_wy_we_controls').children().eq(0),
        infinite: false,
        responsive: [

            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    })

    $('.factory_body').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: $('.factory_controls').children().eq(1),
        prevArrow: $('.factory_controls').children().eq(0),
        //variableWidth: true,
        initialSlide: 1,
        infinite: false,
        centerMode: true,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                },
            },
        ]
    })
    $('.our_thanks_body').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: $('.slider_wy_we_controls').children().eq(1),
        prevArrow: $('.slider_wy_we_controls').children().eq(0),
        //variableWidth: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ]
    })

    $('.logos_slider_body').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: $('.slider_logos_conrols').children().eq(1),
        prevArrow: $('.slider_logos_conrols').children().eq(0),
        //variableWidth: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
        ]
    })

});
let burger = () => {
    let burgerBtn = document.querySelector('.burger');
    let menu = document.querySelector('.lower_part');
    let body = document.querySelector('body');
    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('_active');
        menu.classList.toggle('_active');
        body.classList.toggle('_lock');
    })
}
burger();