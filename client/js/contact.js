/* 请求图片 */
var imgsData = []
function getImgRequest() {
    fetch('http://localhost:80/users/pic', {
        method: "get"
    }).then(res => res.json().then(res => {
        imgsData = res.array
        operate.imgsHandler(imgsData)
    }))
}

getImgRequest()

var operate = {
    imgsHandler: function(imgsArr) {  // 获取图片
        imgsArr.forEach((item, index) => {
            if(index === 0){
                bannerBg = item.path
            } else if(index === 12) {
                headerIcon = item.path
            } else if (index === 2) {
                phoneCode = item.path
            } else if (index === 3) {
                wxCode = item.path
            }
        })
        $('.banner').prepend(`<img src="${bannerBg}">`) 
        $('.crumbs').prepend(`<img src="${headerIcon}">`)
        $('.phoneweb').append(`<img src="${phoneCode}">`)
        $('.wxcode').append(`<img src="${wxCode}">`)
    },
}


var verifyCode = new GVerify("v_container")

$(function() {
    $('.contact3').stop().animate({marginTop: '0'}, 1000)
})

$('.gchange').on('click', function() {
    if($('form input').val() === '') {
        alert('验证码不能为空！')
    } else {
        alert('验证码不能错误！')
    }
})

// $('.tab_item a').on('click', function(e) {
//     var e = e || window.event
//     e.preventDefault()
//     $(location).attr('href', 'E:/project/liyu/client/join.html') 
//     $(location).attr('href', 'E:/project/liyu/client/website.html') 
// })