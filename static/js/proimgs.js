// JavaScript Document
$(function () {
    var bigImg = $(".pdl .big");
    var ul = $(".pdl .smalls ul");
    var lis = ul.find('li');
    var len = lis.length;
    var w = ul.parent('div').width() / 5;
    ul.width(len * lis.outerWidth());
    var btnL = $('.pdl .btnL');
    var btnR = $('.pdl .btnR');
    var page = 0;
    var src = null;
    function showBig() {
        src = ul.find('li.current img').attr('src');
        bigImg.find('img').attr({ 'src': src.replace("_60", "_426"), 'jqimg': src.replace("_60", "_720") });
    } //鍒囨崲澶у浘src
    function addClass(num) {
        lis.eq(num).addClass('current').siblings().removeClass('current');
    } //褰撳墠li
    btnL.click(function () {
        if (len >= 5) {
            if (!ul.is(':animated')) {
                if (page < len - 1) {
                    page++;
                    page > 2 && page < len - 1 ? ul.stop().animate({ 'left': '-=' + w }, 300) : false;
                    addClass(page);
                    showBig();
                } else {
                    ul.stop().animate({ 'left': 0 }, 300);
                    page = 0;
                    addClass(page);
                    showBig();
                }
            } //鍒ゆ柇鍔ㄧ敾闃熷垪
        }
    }); //btnL
    btnR.click(function () {
        if (len >= 5) {
            if (!ul.is(':animated')) {
                if (page == 0) {
                    ul.stop().animate({ 'left': -(len - 5) * w }, 300);
                    page = len - 1;
                    addClass(page);
                    showBig();
                } else {
                    page > 2 && page < len - 2 ? ul.stop().animate({ 'left': '+=' + w }, 300) : false;
                    page--;
                    addClass(page);
                    showBig();
                }
            } //鍔ㄧ敾闃熷垪
        }
    }); //btnR
    lis.click(function () {
        var index = $(this).index();
        addClass(index);
        showBig();
    });
});