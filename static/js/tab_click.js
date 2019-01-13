// JavaScript Document
/* @author 凌亚丹 @date 2014-10-22*/
/*tab选项卡*/
$(function(){
		 var $tab_nav=$(".tab_nav ul li");
		 $tab_nav.click(function(){
			 $(this).addClass("selected").siblings().removeClass("selected");
			 var index =$tab_nav.index(this); 
			 $("div.tab_content > div").eq(index).show().siblings().hide();
			 })
		 });
