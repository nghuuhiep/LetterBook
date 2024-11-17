document.getElementById("MB").textContent = MB;
document.getElementById("KB").textContent = KB;
let audio = new Audio("resources/pageFlip.mp3")
let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let active = 2;
function loadShow() {
    let stt = 0;
    window.isDevice = (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(((navigator.userAgent || navigator.vendor || window.opera)).toLowerCase()));
    let mobile = window.isDevice;
    for (let i = 0; i < items.length; i++){
        let main = items[i].style;
        main.height = mobile ? "30vh" : "320px"
        main.width = mobile ? "33.5vw" : "200px"
    }
    let show = mobile ? 2 : 4;
    let marCenter = mobile ? 20 : 100
    let marSide = mobile ? 50 : 80
    items[active-2].style.transform = `none`;
    items[active-2].style.zIndex = 1;
    items[active-2].style.filter = 'none';
    items[active-2].style.opacity = 1;
    items[active-2].style.transform = mobile ? "scale(1.3)" : "scale(1.1)";
    items[active-2].style.fontSize = mobile ? "0.9vh" : "2vh";
    items[active-2].style.padding = mobile ? "20px" : "50px"

    items[active-1].style.transform = `none`;
    items[active-1].style.zIndex = 1;
    items[active-1].style.filter = 'none';
    items[active-1].style.opacity = 1;
    items[active-1].style.transform = mobile ? "scale(1.3)" : "scale(1.1)";
    items[active-1].style.fontSize = mobile ? "0.9vh" : "2vh";
    items[active-1].style.padding = mobile ? "20px" : "50px"
    
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    items[active].style.transform = mobile ? "scale(1.3)" : "scale(1.1)";
    items[active].style.fontSize = mobile ? "0.9vh" : "2vh";
    items[active].style.padding = mobile ? "20px" : "50px"
    
    items[active+1].style.transform = `none`;
    items[active+1].style.zIndex = 1;
    items[active+1].style.filter = 'none';
    items[active+1].style.opacity = 1;
    items[active+1].style.transform = mobile ? "scale(1.3)" : "scale(1.1)";
    items[active+1].style.fontSize = mobile ? "0.9vh" : "2vh";
    items[active+1].style.padding = mobile ? "20px" : "50px"

    items[active+2].style.transform = `none`;
    items[active+2].style.zIndex = 1;
    items[active+2].style.filter = 'none';
    items[active+2].style.opacity = 1;
    items[active+2].style.transform = mobile ? "scale(1.3)" : "scale(1.1)";
    items[active+2].style.fontSize = mobile ? "0.9vh" : "2vh";
    items[active+2].style.padding = mobile ? "20px" : "50px"
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${marCenter + (marSide * stt)}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(${-0.55*stt}deg`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = `blur(${5 * stt}px)`;
        items[i].style.opacity = stt > show ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-marCenter + (-marSide * stt)}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(${0.55*stt}deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = `blur(${5 * stt}px)`;
        items[i].style.opacity = stt > show ? 0 : 0.6;
    }
}
next.onclick = function () {
    if (active == items.length - 1) return
    active = active + 1 < items.length ? active + 1 : active;
    audio.play();
    setTimeout(() => {
        loadShow();
    }, 100);
}
prev.onclick = (function () {
    if (active == 0) return
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
            if (active == 0) return
            active = active - 1 >= 0 ? active - 1 : active;
            audio.play()
            setTimeout(() => {
                loadShow();
            }, 100);
            break;
        case 'ArrowRight':
        case "d":
            if (active == items.length - 1) return
            active = active + 1 >= 0 ? active + 1 : active;
            audio.play()
            setTimeout(() => {
                loadShow();
            }, 100);
            break;
        case "m":
            break
        
    }
})
document.addEventListener("DOMContentLoaded", loadShow)

