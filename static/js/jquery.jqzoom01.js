// JavaScript Document

$(function () {
    $(".jqzoom").jqueryzoom({
        xzoom: 300, //放大图的宽度(默认是 200)
        yzoom: 300, //放大图的高度(默认是 200)
        offset: 10, //离原图的距离(默认是 10)
        position: "right", //放大图的定位(默认是 "right")
        preload: 1
    });
});
$(function () {
    var tcount = 100;
    $("#add").click(function () {
        temp = $("#goods_quantity").val();
        if (temp >= tcount) {
            return;
        }
        if (parseInt(temp) >= 1 && parseInt(temp) < 99) {
            $("#goods_quantity").val(parseInt(temp) + 1);
        } else {
            $("#goods_quantity").val(1);
        }
    });
    $("#push").click(function () {
        temp = $("#goods_quantity").val();
        if (temp >= tcount) {
            return;
        }
        if (parseInt(temp) > 1) {
            $("#goods_quantity").val(parseInt(temp) - 1);
        } else {
            $("#goods_quantity").val(1);
        }
    });

})

//      /*点击左侧产品小图片切换大图*/
//  $(function () {
//      $(".pdl ul li img").livequery("click", function () {
//          var imgSrc = $(this).attr("src");
//          //var i = imgSrc.lastIndexOf(".");
//          //var unit = imgSrc.substring(i);
//          var imgSrc_small = imgSrc.replace("_60", "_426");
//          var imgSrc_big = imgSrc.replace("_60", "_720");
//          $("#bigImg").attr({ "src": imgSrc_small, "jqimg": imgSrc_big });
//          //$("#thickImg").attr("href", imgSrc_big);
//      });
//  });
