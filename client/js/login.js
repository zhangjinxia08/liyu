/* 请求图片 */
var imgsArr = []
function getRequest() {
    fetch('http://localhost:80/users/pic', {
        method: "get"
    }).then(res => res.json().then(res => {
        imgsData = res.array
        operate.imgsHandler(imgsData)
    }))
}

getRequest()

/* 获取图片 */
var operate = {
    init: {
        imgLogo: '',
        qrcode: ''
    },
    imgsHandler: function(imgsArr) {
        imgsArr.forEach((item, index) => {
            if(index === 16){
                imgLogo = item.path
            } else if(index === 1) {
                qrcode = item.path
            }
        })
        $('#logo').append(`<img id="logo_img" src="${imgLogo}">`)         
        $('.code_img').append(`<img src="${qrcode}">`)
    }
}

/* 表单提交 */
function submitForm() {
    var flag = true
    if($('#account').val() === '' && $('#password').val() === '') {
        flag = !flag
    } 
    if(!flag) {
        $('form').submit(function(e) {
            var e = e || window.event
            e.preventDefault()
            $.ajax({
                url: 'http://localhost:80/users/login',
                type: 'post',
                data: {
                    account: $('#account').val(),
                    password: $('#password').val(),
                    tel: $('#tel').val()
                },
                success: function(res) {
                    if(res.usersArr.length === 0) {
                        alert('账号或密码不正确，请重新输入！')
                    }
                    window.history.back()
                }
            })
           
            $('.key').each(function() {
                var key = $(this).attr('id')
                var value = $(this).val()
                localStorage.setItem(key, value)
            })
        })
        
        // each() 匹配每一个符合条件的元素
        $('.key').each(function() {
            // this 每次都指向不同的DOM元素
            var key = $(this).attr('id')
            $(this).val(localStorage.getItem(key))
        })
    }
}

submitForm()


$(function() {
    /* 创建手机区域号 */
    function setAreaCode() {
        var codehtml = ''
        for(var i = 0; i < areaCode["list"].length; i++) {
            codehtml += `<li class="area_code_item">
                            <span></span>
                            <span>${areaCode["list"][i]["city"]}&nbsp;${areaCode["list"][i]["code"]}</span>
                         </li>
                         ` 
        }
        return codehtml    
    }
    
    getAreaCode(setAreaCode())
    
    /* 获取手机区域号 */
    function getAreaCode(codehtml) {
        $('.area_code_list').html(codehtml)
        $('.area_code_item').last().find('span').eq(0).addClass('selected')    
    }
    
    function codeHandler() {
        var codeArr = []
        areaCode["list"].forEach((item, index) => {
            codeArr.push(item.code.substring(1, item.length))
        })
        return codeArr
    }
    
    selectCode(codeHandler())
    
    function selectCode(code) {
        $('.area_code_list').on('click', '.area_code_item', function() {
            $('.area_code').val(code[$(this).index()])
            $('.area_code_select').toggleClass('isShow')
        })
    }    
  
    $('.telInput').on('click', function(e) {
        var e = e || window.event
        e.preventDefault()
        $('.area_code_select').toggleClass('isShow')
    })

    /* 表单切换 */
    function exchageForm() {
        $('.login_tit').children().on('click', function() {
            $(this).addClass('current').siblings().removeClass('current')
            if($(this).index() === 0) {
                $('.account_form').removeClass('method').siblings('.mobilePhone_form').addClass('method')
            } else if($(this).index() === 1) {
                $('.mobilePhone_form').removeClass('method').siblings('.account_form').addClass('method')
            }
        })
    }

    exchageForm()
})

/* 邮箱密码验证 */
function EPVerify() {
    $('.acc').on('change', function() {
        var patt = /^[0-9a-zA-Z]+@[a-z0-9]+\.[a-z]{2,4}$/
        if($(this).val() === '') {
            $('.err_tips').text('请填写你的邮箱账号')
        } else if ($(this).val() === '' && $('.acc').val() === '') {
            $('.err_tips').text('请填写你的邮箱账号')
        } else {
            if(!patt.test($(this).val())) {
                $('.err_tips').text('你填写的账号或密码不正确，请再次尝试')
            } else {
                $('.err_tips').text('')
            }
        }
    })
    
    $('.psw').on('change', function() {
        var patt = /^[0-9a-zA-z]{6,16}$/
        if($(this).val() === '') {
            $('.err_tips').text('请填写邮箱密码')
        } else {
            if(!patt.test($(this).val())) {
                $('.err_tips').text('你填写的账号或密码不正确，请再次尝试')
            } else {
                $('.err_tips').text('')
            }
        }
    })

    /* 手机号验证 */
    $('.tel').on('change', function() {
        var patt = /^1[345789]\d{9}$/
        if(!patt.test($(this).val())) {
            $('.tel_tip').text('请输入正确的手机号码')
        } else {
            $('.tel_tip').text('')
        }
    })
}

EPVerify()

/* 验证码 */
function gVerify() {
    var verifyCode = new GVerify("v_container");
    $('.id_code').on('change', function() {
        var res = verifyCode.validate($(this).val())
        if(res) {
            $('.gver_tip').text('验证正确')
            $('.gver_tip').css('color', 'green')
        } else {
            $('.gver_tip').text('验证码错误')
            $('.gver_tip').css('color', 'red')
        }
    })    
}

gVerify()


