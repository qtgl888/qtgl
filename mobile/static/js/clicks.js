$(function () {
    //-------------------- 留言 --------------------------------
    $("#btnSendMessage").click(function () {
        var b = $("#form-message").valid();        if (b) {
            var siteid = $("#SiteId").val();
            var title = $("#Title").val();
            var content = $("#Contents").val();
            var name = $("#Name").val();
            var email = $("#Email").val();
            var qq = $("#qq").val();
            var phone = $("#Phone").val();

            if (typeof siteid != "string") {
                alert("siteid参数异常");
                return false;
            }

            if (title && title != "") {
                if (/[\u4e00-\u9fa5]+?/ig.test(title)) {
                    var titletemp = title.replace(/[\u4e00-\u9fa5]+?/ig, "**");
                    if (titletemp.length > 50) {
                        alert("标题长度不能大于50！");
                        return false;
                    }
                }
            }
            if (content && content != "") {
                if (/[\u4e00-\u9fa5]+?/ig.test(content)) {
                    var contemp = content.replace(/[\u4e00-\u9fa5]+?/ig, "**");
                    if (contemp.length > 500) {
                        alert("内容长度不能大于500！");
                        return false;
                    }
                }
            }
            if (name && name != "") {
                if (/[\u4e00-\u9fa5]+?/ig.test(name)) {
                    var ntemp = name.replace(/[\u4e00-\u9fa5]+?/ig, "**");
                    if (ntemp.length > 10) {
                        alert("名字长度不能大于10！");
                        return false;
                    }
                }
            }
            if (email && email != "") {
                if (!/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email)) {
                    alert("请正确填写Email地址！")
                    return false;
                }
            }
            if (qq && qq != "") {
                //^[1-9]*[1-9][0-9]*$
                if (!/^[1-9]*[1-9][0-9]*$/.test(qq)) {
                    alert("请填写正确的QQ号！");
                    return false;
                }
            }
            if (phone && phone != "") {
                if (!/^(0[0-9]{2,3}\-)?([2-9][0-9]{6,7})+(\-[0-9]{1,4})?$|(^(13[0-9]|15[0-9]|16[0-9]|17[0-9]|18[0-9])\d{8}$)/.test(phone)) {
                    alert("请填写正确的电话号码（手机或固话）！");
                    return false;
                }
            }

            var data = $("#form-message").serializeArray();
            var msg = "留言";//
            var setMsg = $(this).attr("data-msg");
            if (setMsg && setMsg != "")
                msg = setMsg;
            $.post("/ViewSiteApi/Message/SavaMessage",
                data,
                 function (data) {
                     if (data) {
                         alert(msg + "成功！");
                         location = location;
                     } else {
                         alert(msg + "失败！");
                     }
                 });
        }
    });
    try {
        $('.ImgThumb').jqthumb();
    } catch (e) { }


    //------------------ 自动监控产品分类展开 --------------------
    if ($(".menu_list").length > 0 || $("#firstpane").length > 0) {
        var url = window.location.href.replace('http://', '');
        url = url.substring(url.indexOf("/"), url.length);

        var crt = $('#firstpane').find("a[href='" + url + "']");
        if (crt.length > 0) {
            var crt2 = crt.parent();
            if (crt2.attr("class").indexOf("menu_body") >= 0)
                crt2.show();
            else if (crt2.attr("class").indexOf("menu_head") >= 0)
                crt2.next("div.menu_body").show();
            else
                $("#firstpane .menu_body:eq(0)").show();
        } else {
            $("#firstpane .menu_body:eq(0)").show();
        }

        //$("#firstpane p.menu_head").click(function () {
        //    $(this).addClass("current").next("div.menu_body").slideToggle(300).siblings("div.menu_body").slideUp("slow");
        //    $(this).siblings().removeClass("current");
        //});
        //$("#secondpane .menu_body:eq(0)").show();
        //$("#secondpane p.menu_head").mouseover(function () {
        //    $(this).addClass("current").next("div.menu_body").slideDown(500).siblings("div.menu_body").slideUp("slow");
        //    $(this).siblings().removeClass("current");
        //});

        var typeid = $("#hidTypeId").val();
        if (typeid) {
            var typeobj = $("#firstpane a");
            var showObj;
            $.each(typeobj, function () {
                var id = $(this).attr("data-id")
                if (typeid == id) {
                    showObj = $(this).attr("data-parent");
                } else {
                    $(this).parent().hide();
                }
            });

            $("p[data-id='" + showObj + "']+div").show();
        }
    }
    //------------------ End --------------------

});

var browser = {
    isValid:true,
    versions: function () {
        var u = navigator.userAgent, app = navigator.appVersion;
        return {//移动终端浏览器版本信息   
            trident: u.indexOf('Trident') > -1, //IE内核  
            presto: u.indexOf('Presto') > -1, //opera内核  
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核  
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核  
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端  
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端  
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或者uc浏览器  
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器  
            iPad: u.indexOf('iPad') > -1, //是否iPad    
            webApp: u.indexOf('Safari') == -1 //是否web应该程序，没有头部与底部  
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
}
