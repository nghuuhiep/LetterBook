document.getElementById("MB").textContent = MB;
document.getElementById("KB").textContent = KB;
let audio = new Audio(".resources/pageFlip.mp3")
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let active = 2;
function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    window.isDevice = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(((navigator.userAgent || navigator.vendor || window.opera)).toLowerCase()));
    let mobile = window.isDevice;
    let show = mobile ? 2 : 3;
    items[active].style.transform = mobile ? "scale(2)" : "scale(1.1)";
    items[active].style.fontSize = mobile ? "large" : "";
    items[active].style.padding = mobile ? "20px" : "50px"
    items[active].style.height = mobile ? "350px" : "320px"
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${100 + (100 * stt)}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = `blur(${5 * stt}px)`;
        items[i].style.opacity = stt > show ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-100 + (-100 * stt)}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = `blur(${5 * stt}px)`;
        items[i].style.opacity = stt > show ? 0 : 0.6;
    }
}
next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    audio.play();
    setTimeout(() => {
        loadShow();
    }, 100);
    
}
prev.onclick = (function () {
    active = active - 1 >= 0 ? active - 1 : active;
    audio.play()
    setTimeout(() => {
        loadShow();
    }, 100);
})
document.addEventListener("keyup",(e)=>{
    switch (e.key){
        case "ArrowLeft":
        case "a":
            active = active - 1 >= 0 ? active - 1 : active;
            audio.play()
            setTimeout(() => {
                loadShow();
            }, 100);
            break;
        case 'ArrowRight':
        case "d":
            active = active + 1 >= 0 ? active + 1 : active;
            audio.play()
            setTimeout(() => {
                loadShow();
            }, 100);
            break;
        
    }
})
document.addEventListener("DOMContentLoaded", loadShow)

