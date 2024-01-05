window.addEventListener('load', () => {

    new Swiper('.stay__slider', {
        navigation: {
            nextEl: '.stay__next',
        },
        pagination: {
            el: '.stay__pagination',
            clickable: true,
        },
        // keyboard: {
        //     enabled: true,
        //     onlyInViewport: true,
        //     pageUpDown: true,
        // },
        autoHeight: true,
        spaceBetween: 0,
        loop: true,
        observer: true,
        observerParents: true,
        speed: 1000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
    });

});