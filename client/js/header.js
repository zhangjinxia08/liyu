// 导航下边框
$('.header-navlist').on('mouseenter','.header-item',function(){
    
    $('.header-slidebar').width($(this).width() - 24)
    var left = ($(this).index() - 1) * $(this).width() + 56
    $('.header-slidebar').css('left',left)
    
})
// var i
// var flag
$('.header-navlist').on('click','.header-item',function(){
    $(this).addClass('active').find("a").css('color','#1b62b7')
    $(this).siblings().removeClass('active').find("a").css('color','#000')
    // i = $(this).index()
    // flag = $(this).hasClass('active')
    // // sessionStorage.setItem('i', i)
    // sessionStorage.setItem('flag', flag)
})
var left2
$('.header-navlist').on('mouseleave','.header-item',function(){
//    console.log($('.active').index('.header-item'))
//    console.log($('.active').width() - 24)
    $('.header-slidebar').width($('.active').width() - 24)
    if($('.active').index('.header-item') === 0){
        $('.header-slidebar').css('left',0)
    }else{
        left2 = ($('.active').index('.header-item') - 1) * $('.active').width() + 56
        $('.header-slidebar').css('left',left2)
    }
    
    
})
// 搜索框
var flag = true
$('.header-search').on('click',function(){
    if(flag){
        flag = false
        $(this).prev().css('display','block')
        $('.header-addition1').css('border-left-color','transparent')
    }else{
        flag = true
        $(this).prev().css('display','none')
        $('.header-addition1').css('border-left-color','#999')
    }
    
})

// 跳转页面
$('.header-login').on('click',function(){
    location.href = './login.html'
})
let $headerNavlist = $('.header-navlist')
$headerNavlist.on('click','.header-title1',function(){
    location.href = './index.html'
})
$headerNavlist.on('click','.header-title2',function(){
    location.href = './A-come-in-liyu.html'
})
$headerNavlist.on('click','.header-title3',function(){
    location.href = './new-origin.html'
})
$headerNavlist.on('click','.header-title4',function(){
    location.href = './product.html'
})
$headerNavlist.on('click','.header-title5',function(){
    location.href = './case.html'
})
$headerNavlist.on('click','.header-title6',function(){
    location.href = './service.html'
})
$headerNavlist.on('click','.header-title7',function(){
    location.href = './join.html'
})

$headerNavlist.on('click','.header-title8',function(){
    location.href = './A-come-in-liyu.html'
})
$headerNavlist.on('click','.header-title9',function(){
    location.href = './A-development-history.html'
})
$headerNavlist.on('click','.header-title10',function(){
    location.href = './A-corporate-culture.html'
})
$headerNavlist.on('click','.header-title11',function(){
    location.href = './A-Honorary-qualifications.html'
})
$headerNavlist.on('click','.header-title12',function(){
    location.href = './A-Staff-style.html'
})
$headerNavlist.on('click','.header-title13',function(){
    location.href = './A-IMage-publicity.html'
})

$headerNavlist.on('click','.header-title14',function(){
    location.href = './new-origin.html'
})
$headerNavlist.on('click','.header-title15',function(){
    location.href = './new-trade.html'
})
$headerNavlist.on('click','.header-title16',function(){
    location.href = './new-newspaper.html'
})
$headerNavlist.on('click','.header-title17',function(){
    location.href = './new-info.html'
})

$headerNavlist.on('click','.header-title18',function(){
    location.href = './product.html'
})
$headerNavlist.on('click','.header-title19',function(){
    location.href = './product-zhengshu.html'
})
$headerNavlist.on('click','.header-title20',function(){
    location.href = './product-chengguo.html'
})

$headerNavlist.on('click','.header-title21',function(){
    location.href = './case.html'
})
$headerNavlist.on('click','.header-title22',function(){
    location.href = './case-customer.html'
})
$headerNavlist.on('click','.header-title23',function(){
    location.href = './case-partner.html'
})
$headerNavlist.on('click','.header-title24',function(){
    location.href = './case-invest.html'
})

$headerNavlist.on('click','.header-title25',function(){
    location.href = './service.html'
})
$headerNavlist.on('click','.header-title26',function(){
    location.href = './ser-xiaoshou.html'
})
$headerNavlist.on('click','.header-title27',function(){
    location.href = './ser-shouhou.html'
})
$headerNavlist.on('click','.header-title28',function(){
    location.href = './ser-peijian.html'
})
$headerNavlist.on('click','.header-title29',function(){
    location.href = './ser-wenti.html'
})
$headerNavlist.on('click','.header-title30',function(){
    location.href = './ser-ziliao.html'
})

$headerNavlist.on('click','.header-title31',function(){
    location.href = './join.html'
})
$headerNavlist.on('click','.header-title32',function(){
    location.href = './website.html'
})
$headerNavlist.on('click','.header-title33',function(){
    location.href = './contact.html'
})