// 导航下边框
$('.header-navlist').on('mouseenter','.header-item',function(){
    
    $('.header-slidebar').width($(this).width() - 24)
    var left = ($(this).index() - 1) * $(this).width() + 56
    $('.header-slidebar').css('left',left)
    
})
$('.header-navlist').on('click','.header-item',function(){
    
    $(this).addClass('active').find("a").css('color','#1b62b7')
    $(this).siblings().removeClass('active').find("a").css('color','#000')
   
   
})
$('.header-navlist').on('mouseleave','.header-item',function(){
   
    $('.header-slidebar').width($('.active').width() - 24)
    var left2 = ($('.active').index('.header-item') - 1) * $('.active').width() + 56
   $('.header-slidebar').css('left',left2)
    
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