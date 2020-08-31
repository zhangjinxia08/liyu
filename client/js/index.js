// 首页第一个轮播
var mySwiper0 = new Swiper('#banner', {
  autoplay: true,//可选选项，自动滑动
  loop: true, //无缝循环
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// 新闻资讯tab切换
$('.t-item>.tabitem').eq(0).show()
$('.tabs').on('click', "a", function () {
  var index = $(this).index()
  console.log(index)
  $('.t-item>.tabitem').hide().eq(index).show()
})


// 产品中心tab切换
$('.info-right .info-item').eq(0).show()
$('.info-left li').on('click', function () {
  var index = $(this).index()
  $('.info-right .info-item').hide().eq(index).show()
})


// 首页第二个轮播
var mySwiper1 = new Swiper('#banner-2', {
  autoplay: true,//可选选项，自动滑动
  loop: true, //无缝循环
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
});


// 表单请求连接数据库
$('.gChange').on('click', function () {
  var obj = {
    contacts: $('#contacts').val(),
    email: $('#email').val(),
    mobile: $('#mobile').val(),
    content: $('#content').val(),
    checkcode: $('#checkcode').val()
  }
  $.ajax({
    url: "http://localhost/liyu/index.html",
    type: "post",
    data: obj,
    success: function (res) {
      if (res.code === 1) {
        console.log(1)
      }

    }
  })
})