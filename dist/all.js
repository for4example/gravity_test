let popup_open=document.getElementById("popup-open"),popup=document.getElementById("popup"),popup_close=document.getElementById("close"),count_item=document.getElementById("count"),close_btn=document.getElementById("close-btn");popup_open.addEventListener("click",function(e){e.preventDefault(),"undefined"!=typeof Storage?(sessionStorage.count?sessionStorage.count=Number(sessionStorage.count)+1:sessionStorage.count=1,count_item.innerHTML=sessionStorage.count):count_item.innerHTML=" ",5<=sessionStorage.count&&close_btn.classList.add("active"),popup.classList.toggle("active")}),close_btn.addEventListener("click",function(e){e.preventDefault(),popup.classList.remove("active")}),popup.addEventListener("click",function(){popup.classList.toggle("active")}),popup_close.addEventListener("click",function(){popup.classList.remove("active")});