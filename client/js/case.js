fetch('http://172.16.5.103/users/casepic', {
    method: 'get'
}).then(res => res.json()).then(res => {
    var banner = ''
    var home = ''
    var field = ''
    var field2 = ''
    var invest = ''
    var partner = ''
    var product = ''
    var product2 = ''
    var product3 = ''
    res.forEach((item, index) => {
        if (item.order === 3) {
            banner = ` <img src="${item.url}" alt="" class="case-banner-bg">`
        }else if(item.order === 9) {
            home = ` <img src="${item.url}" alt="">`
        }else if(item.id === 11) {
            field = ` <img src="${item.url}" alt="">`
        }else if(item.id === 12) {
            field2 = ` <img src="${item.url}" alt="">`
        }else if(item.order === 11) {
            invest += ` <img src="${item.url}" alt="">`
        }else if(item.order === 12) {
            partner += `
            <li>
                <img src="${item.url}" alt="">
            </li>
            `
        }else if(item.order === 13) {
            product += `
            <li class="case-product-item">
                <a href="javascript:;" >
                    <img src="${item.url}" alt="" class="case-product-pic">
                    <p class="case-product-title">${item.title}</p>
                </a>
            </li>
            `
        }else if(item.order === 14) {
            product2 += `
            <li class="case-product-item">
                <a href="javascript:;" >
                    <img src="${item.url}" alt="" class="case-product-pic">
                    <p class="case-product-title">${item.title}</p>
                </a>
            </li>
            `
        } else if(item.order === 15) {
            product3 += `
            <li class="case-product-item">
                <a href="javascript:;" >
                    <img src="${item.url}" alt="" class="case-product-pic">
                    <p class="case-product-title">${item.title}</p>
                </a>
            </li>
            `
        }
        // console.log(res[26].url)
    })
   
    $('.case-banner').prepend(banner)
    $('.case-classify').prepend(home)
    $('.case-zhaoqi').append(field)
    $('.case-garbage').append(field2)
    $('.case-invest-pic').html(invest)
    $('.case-partner').html(partner)
    $('.case-product-list1').html(product)
    $('.case-product-list2').html(product2)
    $('.case-product-list3').html(product3)
})
// 标题tab切换
$('.case-nav').on('click',function(){
    $(this).addClass('active') 
    $(this).siblings().removeClass('active')
})
// 分页
var index = 0
$('.case-pagebar').on('click',function(){
    $(this).addClass('active').siblings().removeClass('active')
    $('.case-product').eq($(this).index()).addClass('active').siblings().removeClass('active')
    index = $(this).index()  
    // 点击之后让页面回到顶部
    $('html,body').animate({
        scrollTop:0
    })

})
// 下一页
$('.case-next').on('click',function(){
    index++
    if(index > 2){
        index = 2
    }else{
        $('.case-pagebar').eq(index).addClass('active').siblings().removeClass('active')
        $('.case-product').eq(index).addClass('active').siblings().removeClass('active')
    } 
     // 点击之后让页面回到顶部
     $('html,body').animate({
        scrollTop:0
    })

})
// 上一页
$('.case-prev').on('click',function(){
    index--
    if(index < 0){
        index = 0
    }else{
        $('.case-pagebar').eq(index).addClass('active').siblings().removeClass('active')
        $('.case-product').eq(index).addClass('active').siblings().removeClass('active')
    }
     // 点击之后让页面回到顶部
     $('html,body').animate({
        scrollTop:0
    })

})
// 点击跳转客户案例详情页
$('.case-product').on('click','.case-product-item',function(){
    window.location.href='./case-detail.html'
})



    
   
