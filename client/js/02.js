// var mg = $('.about02 ul').css('marginLeft')
$(".tabs li ").on('mouseover', function() {
    $(this).addClass('active').siblings('.active').removeClass('active')
})
var count = 0
$('.about02 .right').on('click', $('.about02 ul'), function() {
    console.log(111)
    if (count < 12) {
        console.log(count)
        count++
        $('.about02 ul').stop().animate({
            marginLeft: -200 * count
        }, function() {
            if (count == 12) {
                count = 0
                $('.about02 ul').css({
                    marginLeft: '0px'
                })
            }
        })
    }
})

$('.about02 .left').on('click', $('.about02 ul'), function() {
    if (count === 0) {
        count = 11
        $('.about02 ul').stop().animate({
            marginLeft: -200 * 11
        })
    }
    if (count > 0) {
        count--
        $('.about02 ul').stop().animate({
            marginLeft: -200 * count
        })
    }
})
window.onload = function() {
        $('.about02').stop().animate({
            opacity: 1,
            marginTop: 200
        }, 1000)
    }
    // 荣誉资历
    //轮播
var mySwiper = new Swiper('.swiper-container', {
        autoplay: true, //可选选项，自动滑动
        loop: true,
        centeredSlides: true,
        effect: 'cube',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
    // var swiper = new Swiper('.swiper-container', {
    //     loop: true,
    //     pagination: '.swiper-pagination',
    //     effect: 'coverflow',
    //     grabCursor: true,
    //     centeredSlides: true,
    //     nextButton: '.swiper-button-next',
    //     prevButton: '.swiper-button-prev',
    //     slidesPerView: 'auto',
    //     coverflow: {
    //         rotate: 0, // 旋转的角度

//         modifier: 3, // 修正值 该值越大前面的效果越明显
//         slideShadows: false // 页面阴影效果
//     },
//     spaceBetween: 20

// });