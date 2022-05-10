document.addEventListener('DOMContentLoaded', function() {

    const showSlider = new Swiper('.showcase-carousel', {
        loop: true, /*зацикливание элемента*/
        slidesPerView: 3, /*количество отображаемых элементов*/
        speed: 1500, /*котроль скорости прокрутки*/
        centeredSlides: true, /*ценртрирование элеммента*/
        navigation: {
            nextEl: '.showcase-navigation__next',
            prevEl: '.showcase-navigation__prev'
        }
    })                 


    document.querySelector('video').playbackRate = 1.3 /* метод контроля скорости элемента*/
})