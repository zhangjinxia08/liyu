// 企业新闻内容导航
// $(".new-list li").on("mouseover", function() {
//     $(this).addClass('active').siblings('.active').removeClass('active')
// })

$(document).ready(function() {
    $(".new-connect-left").scroll(function() {
        setTimeout(function() {
            $(".new-connect-left").addClass('@keyframes FDiv')
        })
    })
})