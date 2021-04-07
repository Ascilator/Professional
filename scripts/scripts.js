jQuery(function () {

    $('._with_add').on('click', function () {
        if ($('html').width() < 850) {
            $('._with_add').not(this).children('.link_body').slideUp();
            $(this).children('.link_body').slideToggle();
        }
    })
    if ($('html').width() < 700) {
        $('.menu_link').click(function () {
            $('.menu_link').removeClass('_active')
            $(this).addClass('_active')
        })
    }
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

    $('#i_agree').siblings('label').children('.text').click(function () {
        $('.popup_privaci').addClass('_active');
        $('.black_href').addClass('_active');
    })
    $('.black_href').click(function () {
        $('.popup_privaci').removeClass('_active');
        $('.black_href').removeClass('_active');
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
    AOS.init({
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on


        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 100, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 800, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    });

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

    let item_2 = document.querySelector('.js_contuct_item_1')

    let vieportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    if (vieportWidth < 850) {
        where_insert_item.append(item);
        where_insert_item.append(item_2);
    } else {
        first_pos_table.append(item_2);
        first_pos_table.append(item);

    }

    window.addEventListener('resize', function () {
        vieportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

        if (vieportWidth < 850) {
            where_insert_item.append(item);
            where_insert_item.append(item_2);
        } else {
            first_pos_table.append(item_2);
            first_pos_table.append(item);
        }
    })
}

let arrow_scroll = () => {
    let arrow = document.querySelector('.arrow_up');
    if (arrow) {
        window.addEventListener('scroll', function () {
            if (pageYOffset > 20) {
                arrow.classList.add('_active');
            } else {
                arrow.classList.remove('_active');
            }
        })
        arrow.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        })
    }
}


if ($('.slider_item>a').length)
    $('.slider_item>a').magnificPopup({ type: 'image' });










let popup = () => {
    let popup = document.querySelector('.popup_call');
    let popup_2 = document.querySelector('.popup_sms');
    let popup_3 = document.querySelector('.popup_zayavka');



    let black = document.querySelector('.black_href');
    let cross = document.querySelectorAll('.cross');



    if (cross && black && popup && popup_2) {
        if (popup_3 && document.querySelector('.red_btn')) {
            document.querySelector('.red_btn').addEventListener('click', function () {
                this.classList.add('_active');
                black.classList.add('_active');
                popup_3.classList.add('_active');
            })
            cross.forEach(el => {
                el.addEventListener('click', function () {
                    this.classList.remove('_active');
                    black.classList.remove('_active');
                    popup_3.classList.remove('_active');
                })
            })
            black.addEventListener('click', function () {
                this.classList.remove('_active');
                black.classList.remove('_active');
                popup_3.classList.remove('_active');
            })
        }
        if (document.querySelector('.red_button')) {
            document.querySelector('.red_button').addEventListener('click', function () {
                this.classList.add('_active');
                black.classList.add('_active');
                popup_3.classList.add('_active');
            })
        }
        if (document.querySelector('.js-learn-more')) {
            document.querySelector('.js-learn-more').addEventListener('click', function () {
                this.classList.add('_active');
                black.classList.add('_active');
                document.querySelector('.text_popup').classList.add('_active');
            })
            black.addEventListener('click', function () {
                this.classList.remove('_active');
                black.classList.remove('_active');
                document.querySelector('.text_popup').classList.remove('_active');
            })

        }
        document.querySelector('.js_contuct_item_1>.lower').addEventListener('click', function () {
            this.classList.add('_active');
            black.classList.add('_active');
            popup_2.classList.add('_active');
        })
        document.querySelector('.js_contuct_item>.lower').addEventListener('click', function () {
            this.classList.add('_active');
            black.classList.add('_active');
            popup.classList.add('_active');
        })
        cross.forEach(el => {
            el.addEventListener('click', function () {
                this.classList.remove('_active');
                black.classList.remove('_active');
                popup.classList.remove('_active');
                popup_2.classList.remove('_active');
            })
        })

        black.addEventListener('click', function () {
            this.classList.remove('_active');
            black.classList.remove('_active');
            popup.classList.remove('_active');
            popup_2.classList.remove('_active');
        })
    }
}
popup();
arrow_scroll();
dynamicAdaptive();
burger();