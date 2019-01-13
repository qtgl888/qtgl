$(function () {
    //判断手机操作系统
    function getSystem() {
        var systemVersion = "";
        var browser = {
            versions: function () {
                var u = navigator.userAgent, app = navigator.appVersion;
                return {         //移动终端浏览器版本信息
                    trident: u.indexOf('Trident') > -1, //IE内核
                    presto: u.indexOf('Presto') > -1, //opera内核
                    webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
                    gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
                    mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
                    ios: !!u.match(/\(i[^;]+;( U;)?CPU.+Mac OS X/), //ios终端
                    android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
                    iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                    iPad: u.indexOf('iPad') > -1, //是否iPad
                    webApp: u.indexOf('Safari') == -1//是否web应该程序，没有头部与底部
                };
            }(),
            language: (navigator.browserLanguage || navigator.language).toLowerCase()
        }

        if (browser.versions.mobile) {//判断是否是移动设备打开。browser代码在下面
            var ua = navigator.userAgent.toLowerCase();//获取判断用的对象
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                systemVersion = "WeiXin";//微信打开
                if (browser.versions.android) //安卓端微信
                    systemVersion = "WeiXin_Android";
                else if (browser.versions.ios) //ios端微信
                    systemVersion = "WeiXin_IOS";
                else if (browser.versions.iPad) //iPad端微信
                    systemVersion = "WeiXin_iPad";
                else if (browser.versions.iPhone) //iPhone端微信
                    systemVersion = "WeiXin_Phone";
            }
            else if (browser.versions.android) //安卓
                systemVersion = "Android";
            else if (browser.versions.ios) //ios
                systemVersion = "IOS";
            else if (browser.versions.iPad) //iPad
                systemVersion = "iPad";
            else if (browser.versions.iPhone) //iPhone
                systemVersion = "iPhone";
            else
                systemVersion = "Other";
        }
        else {
            systemVersion = "PC";//PC
        }

        return systemVersion;
    };

    //判断操作系统类型
    var getOS = function () {
        var os = navigator.platform;
        var userAgent = navigator.userAgent;
        var info = "";
        if (os.indexOf("Windows") > -1 || userAgent.indexOf("Windows") > -1) {

            if (userAgent.indexOf("Windows 95") > -1) {
                info = "Windows95";
            } else if (userAgent.indexOf("Windows 98") > -1) {
                info = "Windows98";
            } else if (userAgent.indexOf("Windows NT 5.0") > -1) {
                info = "Windows2000";
            } else if (userAgent.indexOf("Windows NT 5.1") > -1) {
                info = "WindowsXP";
            } else if (userAgent.indexOf("Windows NT 5.2") > -1) {
                info = "Windows2003";
            } else if (userAgent.indexOf("Windows NT 6.0") > -1) {
                info = "WindowsVista";
            } else if (userAgent.indexOf("Windows NT 6.1") > -1 || userAgent.indexOf("Windows 7") > -1) {
                info = "Win7";
            } else if (userAgent.indexOf("Windows NT 6.2") > -1 || userAgent.indexOf("Windows NT 6.3") > -1 || userAgent.indexOf("Windows 8") > -1) {
                info = "Win8";
            } else if (userAgent.indexOf("Windows NT 10") > -1) {
                info = "Win10";
            } else {
                info = "Other";
            }
        } else
            info = getSystem();

        return info;
    };

    //判断浏览器类型
    var getBrowser = function () {
        var userAgent = navigator.userAgent;
        var info = "";
        var tempArray = "";

        if (/[Ff]irefox(\/\d+\.\d+)/.test(userAgent)) {
            tempArray = /([Ff]irefox)\/(\d+\.\d+)/.exec(userAgent);
            info = tempArray[1] + " " + tempArray[2];
        } else if (/MSIE \d+\.\d+/.test(userAgent)) {
            tempArray = /MS(IE) (\d+\.\d+)/.exec(userAgent);
            info = tempArray[1] + " " + tempArray[2];
        } else if (/[Cc]hrome\/\d+/.test(userAgent)) {
            tempArray = /([Cc]hrome)\/(\d+)/.exec(userAgent);
            info = tempArray[1] + " " + tempArray[2];
        } else if (/[Vv]ersion\/\d+(\.\d)* *[Ss]afari\/\d+\.\d/.test(userAgent)) {
            tempArray = /[Vv]ersion\/(\d+\.\d+)* *([Ss]afari)\/(\d+\.\d+)/.exec(userAgent);
            info = tempArray[2] + " " + tempArray[1];
        } else if (/[Oo]pera.+[Vv]ersion\/\d+\.\d+/.test(userAgent)) {
            tempArray = /([Oo]pera).+[Vv]ersion\/(\d+)\.\d+/.exec(userAgent);
            info = tempArray[1] + " " + tempArray[2];
        } else if (/[Ss]afari\/\d+/.test(userAgent)) {
            tempArray = /([Ss]afari)\/(\d+)/.exec(userAgent);
            info = tempArray[1] + " " + tempArray[2];
        } else {
            info = "unknown";
        }
        return info;
    };

    //加载
    window.onload = function () {
        var loadTime = 0;
        try {
            var _beginT = window.performance.timing.navigationStart;
            if (_beginT <= 0) _beginT = performance.timing.fetchStart;
            var _endT = window.performance.timing.domContentLoadedEventEnd;

            loadTime = _endT - _beginT; //获取页面执行时间（毫秒）
            loadTime = parseFloat(loadTime / 1000); //毫秒转秒
        } catch (e) { }

        _domain = window.location.host; //页面域名
        _path = window.location.href; //页面完整地址
        _referrer = document.referrer; //来源

        if (_domain.indexOf("lonkinglg.com") > 0) //屏蔽网站
            return false;

        var _url = "http://passport.v3.hnrich.net/api/APP/GetPostSiteAccessLog?d=" + _domain + "&p=" + encodeURIComponent(_path) + "&t=" + loadTime + "&o=" + getOS() + "&b=" + getBrowser() + "&r=" + encodeURIComponent(_referrer) + "&v="; //+ encodeURIComponent(navigator.userAgent);
        $.ajax({
            url: _url,
            type: 'GET',
            dataType: 'JSONP',
            success: function (data) { }
        });
    };


});