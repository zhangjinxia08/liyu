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
  $('.tabs a').eq(index).css("color","#337ab7").siblings().css("color","rgba(102, 102, 102, 1)")
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


// 验证码

//设置一个全局的变量，便于保存验证码
var codeval;
function createCode() {
  //首先默认code为空字符串
  codeval = '';
  //设置长度
  var codeLength = 4;
  var codeV = document.getElementById('code');
  //设置随机字符
  var random = new Array(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z');
  //循环codeLength 设置的4就是循环4次
  for (var i = 0; i < codeLength; i++) {

    var index = Math.floor(Math.random() * 36);
    //字符串拼接 将每次随机的字符 进行拼接
    codeval += random[index];
  }
  codeV.value = codeval;
}

//设置此处的原因是每次进入界面展示一个随机的验证码，不设置则为空
window.onload = function () {
  createCode();
}

// 表单请求连接数据库

$('form').on('submit', function (e) {
  var e = e || window.event
    e.preventDefault()
  var obj = {
      contacts: $('#contacts').val(),
      email: $('#email').val(),
      mobile: $('#mobile').val(),
      content: $('#content').val(),
      checkcode: $('#checkcode').val()
    } 
    var oValue = $('#code').val();
    if ($('#contacts').val().length === 0) {
      alert('请填写联系人')
      return;
    } else if ($('#email').val().length === 0) {
      alert('请填写邮箱信息')
      return;
    } else if ($('#mobile').val().length === 0) {
      alert('请填写联系方式')
      return;
    } else if ($('#code').val().length === 0) {
      alert('请填写验证码')
      return;
    }else if (oValue == 0) {
      alert('请输入验证码');
      return;
    } else if (oValue != codeval) {
      alert('验证码不正确，请重新输入');
      oValue = ' ';
      createCode();
    }
    $.ajax({
      url: "http://172.16.5.103/index.html",
      type: "post",
      data: obj,
      success: function (res) {
        if (res.code === 1) {
          // console.log(1)
          alert('提交成功')
        }
  
      }
    })
  })
// 跳转页面
$('.mode').on('click', function () {
  location.href = './A-come-in-liyu.html'
})



