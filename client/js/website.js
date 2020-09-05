/* 请求地址 */
var addressData = []
function getAddressRequest() {
    fetch('http://172.16.5.103/users/website', {
        method: "get"
    }).then(res => res.json().then(res => {
        addressData = res.addressArr
        operate.addressHandler(addressData)
    }))
}

getAddressRequest()

/* 请求图片 */
var imgsData = []
function getImgRequest() {
    fetch('http://172.16.5.103/users/pic', {
        method: "get"
    }).then(res => res.json().then(res => {
        imgsData = res.array
        operate.imgsHandler(imgsData)
    }))
}

getImgRequest()

var bannerBg = '',
    headerIcon = '',
    addressIcon = ''
var operate = {
    imgsHandler: function(imgsArr) {  // 获取图片
        imgsArr.forEach((item, index) => {
            if(index === 0){
                bannerBg = item.path
            } else if(index === 12) {
                headerIcon = item.path
            } else if(index === 4) {
                addressIcon = item.path
            }
        })
        $('.banner').prepend(`<img src="${bannerBg}">`) 
        $('.crumbs').prepend(`<img src="${headerIcon}">`)
        $('.addrImg').attr("src", `${addressIcon}`)
        console.log(addressIcon)
        console.log($('.addrImg'))
    },

    addressHandler: function(addressArr) {
        var html = ''
        for(var i = 0; i < addressArr.length; i++) {
            html += `
                    <li>
                        <div class="comp_head">
                            <img class="addrImg">
                            <span class="comp_tit">${addressArr[i].title}</span>
                        </div>
                        <p class="comp_addr">${addressArr[i].address}</p>
                        <p>${addressArr[i].tel}</p>
                        <p>${addressArr[i].fax}</p>
                        <p>${addressArr[i].postal}</p>
                    </li>
            `
        }
        $('.comp_list').html(html)
    }

}

$(function() {
    $('.contact2').stop().animate({marginTop: '0'}, 1000)
})

// $('.tab_item a').on('click', function(e) {
//     var e = e || window.event
//     e.preventDefault()
//     $(location).attr('href', 'E:/project/liyu/client/join.html') 
//     $(location).attr('href', 'E:/project/liyu/client/contact.html') 
// })