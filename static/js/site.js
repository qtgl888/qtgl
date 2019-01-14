
  $(document).ready(function(){
    jQuery.getScript("./swiper.min.js")
      .done(function () {
      $(".swiper-fluid").addClass("swiper-slide");
      $(".swiper-fluid").wrapAll("<div class='swiper-wrapper'></div>");
      $(".swiper-wrapper").wrap("<div class='swiper-container'></div>");
      $(".swiper-container").append("<div class='swiper-pagination'></div>") 

      var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        direction: 'vertical',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30,
        mousewheelControl: true
      }); 
      $H=$(window).height();
   $(".swiper-fluid .carousel").height($H); 
    })
      .fail(function () {

    });


    //日期时间 格式化 
    Date.prototype.format = function (format) { 
      var o = {
        "M+": this.getMonth() + 1, //month 
        "d+": this.getDate(), //day 
        "h+": this.getHours(), //hour 
        "m+": this.getMinutes(), //minute 
        "s+": this.getSeconds(), //second 
        "q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
        "S": this.getMilliseconds() //millisecond 
      }

      if (/(y+)/.test(format)) { 
        format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
      }

      for (var k in o) {
        if (new RegExp("(" + k + ")").test(format)) {
          format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }
      }
      return format;
    }

    //日期调用

    $(".date").each(function(){
      var dateArr= $(this).attr("date");

      var datetime = new Date(dateArr);


      $(this).find(".day").html(datetime.format("dd"))
      $(this).find(".yearmonth").html(datetime.format("yyyy/MM"))
    });

    //产品分类cui隐藏显示切换
    $(".productsClassToggle").click(function () {
      $(".productsClassContent:eq(" + $(this).index(".productsClassToggle") + ")").toggle();

    });


    //友情链接
    $(".friend_link ul li a").mouseover(function(){
      $(this).find("div").css("display","block");
    })
    $(".friend_link ul li a").mouseout(function(){
      $(this).find("div").css("display","none");
    })




    //选项卡函数
    function  tabBox(tabBtn,tabContent){
      for( var i=0;i<$(tabBtn).length;i++){
        $(tabBtn)[i].index=i;
        $(tabBtn)[i].onmouseover=function(){
          for(i=0;i< $(tabBtn).length;i++){
            $(tabBtn)[i].className=""
            $(tabContent)[i].style.display="none"
          }
          this.className="active"
          $(tabContent)[this.index].style.display="block" 
        }

      }

    }



    //推荐产品选项卡
    tabBox(".recommend_products_ul li",".recommend_products_content")

    //新闻选项卡
    tabBox(".news_tab_title_ul li",".news_tab_content")

  });





