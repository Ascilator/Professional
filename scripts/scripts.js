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
let dynamicAdaptive = () => {
    let item = document.querySelector('.js_contuct_item');
    let where_insert_item = document.querySelector('nav');
    let first_pos_table = document.querySelector('.contuct_part');


    let vieportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (vieportWidth < 850) {
        where_insert_item.append(item);
    } else {
        first_pos_table.append(item);
    }

    window.addEventListener('resize', function () {
        vieportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        if (vieportWidth < 850) {
            where_insert_item.append(item);
        } else {
            first_pos_table.append(item);
        }
    })
}

AOS.init({
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init', // class applied after initialization
    animatedClassName: 'aos-animate', // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 0, // offset (in px) from the original trigger point
    delay: 200, // values from 0 to 3000, with step 50ms
    duration: 800, // values from 0 to 3000, with step 50ms
    easing: 'ease', // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
});
dynamicAdaptive();
burger();