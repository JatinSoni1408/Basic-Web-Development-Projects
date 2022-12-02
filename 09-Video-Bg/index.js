const btn = document.querySelector(".btn");
const video = document.querySelector(".dog-video");
const icon = document.querySelector(".fa-solid");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", ()=>{
    if(btn.classList.contains("pause")){
        btn.classList.remove("pause");
        video.play();
        icon.classList.add("fa-pause");
        icon.classList.remove("fa-play");
    }else{
        btn.classList.add("pause");
        video.pause();
        icon.classList.remove("fa-pause");
        icon.classList.add("fa-play");
    }
});

window.addEventListener("load",()=>{
    preloader.style.zIndex = "-2";
});