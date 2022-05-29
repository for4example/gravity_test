let popup_open = document.getElementById('popup-open');
let popup = document.getElementById('popup');
let popup_close = document.getElementById('close');
let count_item = document.getElementById('count');
let close_btn = document.getElementById('close-btn');

popup_open.addEventListener("click", function(e){
    e.preventDefault();
    if (typeof(Storage) !== "undefined") {
        if (sessionStorage.count) {
            sessionStorage.count = Number(sessionStorage.count)+1;
        } else {
            sessionStorage.count = 1;
        }
        count_item.innerHTML = sessionStorage.count;
    } else {
        count_item.innerHTML = " ";
    }
    if(sessionStorage.count >= 5){
        close_btn.classList.add('active');
    }
    popup.classList.add('active');
});

close_btn.addEventListener("click", function(e){
    e.preventDefault();
    popup.classList.remove('active');
});

popup_close.addEventListener("click", function(){
    popup.classList.remove('active');
});