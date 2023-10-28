var nav = document.getElementById("nav")

window.addEventListener("scroll",()=>{
    nav.classList.toggle("active",scrollY > 450)
    nav.classList.toggle("doubleactive",scrollY > 750)
})

var preloader = document.getElementById("preloader")

window.addEventListener("load",()=>{
    preloader.classList.add("remove")
    preloader.style.transitionDelay = "2s"
})