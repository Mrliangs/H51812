"use strict";$(function(){var t=0,i=!1;$("#con").on("mousedown",function(o){var s=o.offsetX;$(document).on("mousemove",function(o){var n=o.clientX-s-$("#box").offset().left,e=$("#box")[0].offsetWidth-$("#con")[0].offsetWidth;console.log(e),n<=5?n=0:e<=n&&(n=e),$("#con").css("left",n+"px"),$(".flex_box").css("width",n+"px"),n==e?($(".iconfont").text(""),$("#zyam").css("display","none"),$("#acc").attr("class","pass"),$("#con").html("✔").css("color","green"),$(".flex_box").html("验证成功"),t=e,console.log(t),i=!0,$(this).unbind("mousemove"),$("#con").unbind("mousedown")):$(".flex_box").html(""),o.preventDefault()}),$(document).on("mouseup",function(){i||($("#con").css("left",0),$(".flex_box").css("width",0),$(this).unbind("mousemove"),i=!0)})}),$("#gengd").on("click",function(){$("i").hasClass("")?($("i").addClass("jiant"),$(".icon-p").slideDown(400)):($("i").removeClass("jiant"),$(".icon-p").slideUp(400))}),$("#mobileCommit").on("click",function(){var n=$("#mobile").val().trim(),o=$("#password").val().trim();n&&o?$.ajax({type:"post",url:"../api/api/login.php",data:{user:n,psw:o},success:function(o){console.log(o),"no"==o?(setCookie("name",n),262==t?window.open("../index.html"):alert("请完成拖拽")):alert("登录失败，请重新注册")}}):alert("请输入登录信息")})});