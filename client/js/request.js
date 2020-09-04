fetch('http://172.16.5.102/users/header', {
    method: 'get'
}).then(res => res.json()).then(res => {
    var headerItem = ''
    var headerApproach = ''
    var headerNews = ''
    var headerProduct = ''
    var headerCase = ''
    var headerServer = ''
    var headerContact = ''
    res.forEach((item, index) => {
        if (item.rank === 1) {      
        headerItem += `
            <li class="header-item">
                <a href="javascript:;" class="header-title${item.id}">${item.content}</a>    
                <ul class="header-list header-list${item.id}"></ul>    
            </li>
            `
        } else if (item.rank === 2) {
            headerApproach += `
            <li class="header-pulldown header-title${item.id}">${item.content}</li>
            `
        }else if (item.rank === 3) {
            headerNews += `
            <li class="header-pulldown header-title${item.id}">${item.content}</li>
            `
        }
        else if (item.rank === 4) {
            headerProduct += `
            <li class="header-pulldown header-title${item.id}">${item.content}</li>
            `
        }
        else if (item.rank === 5) {
            headerCase += `
            <li class="header-pulldown header-title${item.id}">${item.content}</li>
            `
        }
        else if (item.rank === 6) {
            headerServer += `
            <li class="header-pulldown header-title${item.id}">${item.content}</li>
            `
        }
        else if (item.rank === 7) {
            headerContact += `
            <li class="header-pulldown header-title${item.id}">${item.content}</li>
            `
        }
    })   
    $('.header-navlist').html(headerItem)
    $('.header-list2').html(headerApproach)
    $('.header-list3').html(headerNews)
    $('.header-list4').html(headerProduct)
    $('.header-list5').html(headerCase)
    $('.header-list6').html(headerServer)
    $('.header-list7').html(headerContact)
    //导航下边框
    function slidebarLeft(){
        $('.header-slidebar').width($('.active').width() - 24)
         left2 = ($('.active').index('.header-item') - 1) * $('.active').width() + 56
        $('.header-slidebar').css('left',left2)
    }
    // 为当前页面的导航标题添加active
    let str = location.pathname
    // console.log(str)
    if(str.indexOf('index') !== -1){
        // console.log(str.indexOf('index'))
        $('.header-title1').css('color','#1b62b7').parent().addClass('active')
        slidebarLeft()
    }else if(str.indexOf('A') !== -1){
        $('.header-title2').css('color','#1b62b7').parent().addClass('active')
        slidebarLeft()
    }
    else if(str.indexOf('new') !== -1){
        $('.header-title3').css('color','#1b62b7').parent().addClass('active')
        slidebarLeft()
    }else if(str.indexOf('product') !== -1){
        $('.header-title4').css('color','#1b62b7').parent().addClass('active')
        slidebarLeft()
    }else if(str.indexOf('case') !== -1){
        // console.log(str.indexOf('case'))
        $('.header-title5').css('color','#1b62b7').parent().addClass('active')
        slidebarLeft()
        // $('.header-title5').css('color','#1b62b7')
        // $('.header-slidebar').width($('.active').width() - 24)
        // var left2 = ($('.active').index('.header-item') - 1) * $('.active').width() + 56
        // $('.header-slidebar').css('left',left2)
    }else if(str.indexOf('ser') !== -1){
        $('.header-title6').css('color','#1b62b7').parent().addClass('active')
        slidebarLeft()
    }else{
        $('.header-title7').css('color','#1b62b7').parent().addClass('active')
        slidebarLeft()
    }

})

fetch('http://172.16.5.102/users/pic', {
    method: 'get'
}).then(res => res.json()).then(res => {
    var logo = ''
    var login = ''
    var search = ''
    res.forEach((item, index) => {
        if (item.order === 0) {
            logo = ` <img src="${item.url}" alt="">`
        }else if (item.order === 1) {
            login = ` <img src="${item.url}" alt="">`
        }else if (item.order === 2) {
            search = ` <img src="${item.url}" alt="">`
        }
    })
    $('.header-logo').html(logo)
    $('.header-login').html(login)
    $('.header-search').html(search)
})