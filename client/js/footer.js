fetch('http://172.16.5.102/users/header', {
    method: 'get'
}).then(res => res.json()).then(res => {
    var footerItem = ''
    var footerApproach = ''
    var footerNews = ''
    var footerProduct = ''
    var footerCase = ''
    var footerServer = ''
    var footerContact = ''
    res.forEach((item, index) => {
        if (item.rank === 1 && item.id !== 1) {      
            footerItem += `
            <li class="footer-item">
                <a href="javascript:;" class="header-title${item.id}">${item.content}</a>    
                <ul class="footer-list footer-list${item.id}"></ul>    
            </li>
            `
        } else if (item.rank === 2) {
            footerApproach += `
            <li class="footer-pulldown header-title${item.id}">${item.content}</li>
            `
        }else if (item.rank === 3) {
            footerNews += `
            <li class="footer-pulldown header-title${item.id}">${item.content}</li>
            `
        }
        else if (item.rank === 4) {
            footerProduct += `
            <li class="footer-pulldown header-title${item.id}">${item.content}</li>
            `
        }
        else if (item.rank === 5) {
            footerCase += `
            <li class="footer-pulldown header-title${item.id}">${item.content}</li>
            `
        }
        else if (item.rank === 6) {
            footerServer += `
            <li class="footer-pulldown header-title${item.id}">${item.content}</li>
            `
        }
        else if (item.rank === 7) {
            footerContact += `
            <li class="footer-pulldown header-title${item.id}">${item.content}</li>
            `
        }
    })   
    $('.footer-navlist').html(footerItem)
    $('.footer-list2').html(footerApproach)
    $('.footer-list3').html(footerNews)
    $('.footer-list4').html(footerProduct)
    $('.footer-list5').html(footerCase)
    $('.footer-list6').html(footerServer)
    $('.footer-list7').html(footerContact)

})
fetch('http://172.16.5.102/users/pic', {
    method: 'get'
}).then(res => res.json()).then(res => {
    var website = ''
    var footerPublic = ''
    var footerAddress = ''
    var footerTel = ''
    var statistic = ''
    res.forEach((item, index) => {
        if (item.order === 4) {
            website = ` 
            <img src="${item.url}" alt="">
            <p>${item.title}</p
            `
        }else if (item.order === 5) {
            footerPublic = ` 
            <img src="${item.url}" alt="">
            <p>${item.title}</p
            `
        }else if (item.order === 6) {
            footerAddress = ` <img src="${item.url}" alt="">`
        }else if (item.order === 7) {
            footerTel = ` <img src="${item.url}" alt="">`
        }else if (item.order === 8) {
            statistic = ` <img src="${item.url}" alt="">`
        }
    })
    $('.footer-website').html(website)
    $('.footer-public').html(footerPublic)
    $('.footer-address').prepend(footerAddress)
    $('.footer-home').prepend(footerTel)
    $('.footer-internation').prepend(footerTel)
    $('.footer-statistic').html(statistic)
})