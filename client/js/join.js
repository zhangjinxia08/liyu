/* 岗位需求 */
var jobsData = []
function getJobRequest() {
    fetch('http://localhost:80/users/require', {
        method: "get"
    }).then(res => res.json().then(res => {
        jobsData = res.jobArr
        operate.createjob(jobsData)
    }))
}

getJobRequest()

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
            } else if (index === 5) {
                selImg = item.path
            } else if (index === 14) {
                prev = item.path
            } else if (index === 15) {
                next = item.path
            } else if (index === 6) {
                flowImg1 = item.path
                flowtxt1 = item.desc
            } else if (index === 7) {
                flowImg2 = item.path
                flowtxt2 = item.desc
            } else if (index === 8) {
                flowImg3 = item.path
                flowtxt3 = item.desc
            } else if (index === 9) {
                flowImg4 = item.path
                flowtxt4 = item.desc
            } else if (index === 10) {
                flowImg5 = item.path
                flowtxt5 = item.desc
            } 
        })
        
        $('.banner').prepend(`<img src="${bannerBg}">`) 
        $('.crumbs').prepend(`<img src="${headerIcon}">`)
        $('.prev').append(`<img src="${prev}">`)
        $('.next').append(`<img src="${next}">`)
        $('.sel').attr("src", `${selImg}`)
        $('.flowImg1').attr("src", `${flowImg1}`)
        $('.flowImg2').attr("src", `${flowImg2}`)
        $('.flowImg3').attr("src", `${flowImg3}`)
        $('.flowImg4').attr("src", `${flowImg4}`)
        $('.flowImg5').attr("src", `${flowImg5}`)
        $('.flowtxt1').text(flowtxt1)
        $('.flowtxt2').text(flowtxt2)
        $('.flowtxt3').text(flowtxt3)
        $('.flowtxt4').text(flowtxt4)
        $('.flowtxt5').text(flowtxt5)
    },
   
    createjob: function(jobsArr) {
        var html = ''
        for(var i = jobsArr.length - 1; i >= 0; i--) {
            jobsArr[0].desc = ''
            jobsArr[0].duty = ''
            html += `
                    <li class="intro_item">
                        <div class="job_head">
                            <div class="job_tit">
                                <h4 class="tit">${jobsArr[i].title}</h4>
                                <span class="cur_time">${jobsArr[i].time}</span>
                            </div>
                            <div class="desc">
                                <span class="des_info">${jobsArr[i].desc}</span>
                                <img class="sel">
                            </div>
                        </div>
                        <div class="job_info">
                            <div class="duty">岗位职责：</div>
                            <ul class="duty_list"> 
                                ${jobsArr[i].duty}
                            </ul>
                            <div class="require">岗位要求：</div>
                            <ul class="require_list"> 
                                ${jobsArr[i].require}                     
                            </ul>
                            <p class="email_tit">投递邮箱：
                                <span class="email">${jobsArr[i].email}</span>
                                <a class="apply" href="">在线申请职位</a>
                            </p>
                        </div>
                    </li>
            `
        }
        $('.intro_list').html(html)
    }
}


/* 下拉菜单 */
$('.intro_list').on('click', '.sel', function() {
   $(this).parent().parent().parent().toggleClass('join_sel')
//    $(this).parent().parent().parent().stop().animate({height: 'auto'}, 1000)
})

$(function() {
    $('.contact1').stop().animate({marginTop: '0'}, 1000)
})

/* 验证码 */
var verifyCode = new GVerify("v_container")

/* 在线职位申请 */
$('.close').on('click', function() {
    $('.apply_container').hide()
})

$('.intro_list').on('click', '.apply', function(e) {
    var e = e || window.event
    e.preventDefault()
    $('.apply_container').show()
})

$('.btn').on('click', function() {
    if($('form input').val() === '') {
        alert('验证码不能为空！')
    } else {
        alert('验证码不能错误！')
    }
})

// $('.tab_item a').on('click', function(e) {
//     var e = e || window.event
//     e.preventDefault()
//     $(location).attr('href', 'E:/project/liyu/client/contact.html') 
//     $(location).attr('href', 'E:/project/liyu/client/website.html') 
// })