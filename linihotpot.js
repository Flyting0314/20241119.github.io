// 按下按鈕之後產生的變化

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

//回到上層按鈕

window.onscroll = () => {
    if (window.scrollY > 60) {
        document.querySelector('#scroll-up').classList.add('active');
    } else {
        document.querySelector('#scroll-up').classList.remove('active');
    }
}