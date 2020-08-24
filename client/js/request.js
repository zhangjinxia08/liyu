fetch('http://172.16.5.104/users/header', {
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
            <li class="header-pulldown">${item.content}</li>
            `
        }else if (item.rank === 3) {
            headerNews += `
            <li class="header-pulldown">${item.content}</li>
            `
        }
        else if (item.rank === 4) {
            headerProduct += `
            <li class="header-pulldown">${item.content}</li>
            `
        }
        else if (item.rank === 5) {
            headerCase += `
            <li class="header-pulldown">${item.content}</li>
            `
        }
        else if (item.rank === 6) {
            headerServer += `
            <li class="header-pulldown">${item.content}</li>
            `
        }
        else if (item.rank === 7) {
            headerContact += `
            <li class="header-pulldown">${item.content}</li>
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

})

fetch('http://172.16.5.104/users/pic', {
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