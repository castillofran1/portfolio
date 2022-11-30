  
/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll(".nav__link")

function linkAction(){
    
    navLink.forEach(n => n.classList.remove("active"))
    this.classList.add("active")

    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show")
}

navLink.forEach(n => n.addEventListener("click", linkAction))


const sr = ScrollReveal({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true  
})

sr.reveal(".titulo",{})
sr.reveal(".subtitulo",{})
sr.reveal(".button",{delay:200})
sr.reveal(".home__img",{delay:400})
sr.reveal(".redes",{interval:200})
sr.reveal(".home__form",{delay:400})

sr.reveal(".about__img",{})
sr.reveal(".about__subtitle",{delay:400})
sr.reveal(".about__text",{delay:400})

sr.reveal(".skills__subtitle",{})
sr.reveal(".skills__text",{})
sr.reveal(".skills__data",{interval:200})
sr.reveal(".skills__img",{delay:600})

sr.reveal(".work__img",{interval:300})

sr.reveal(".contacto__img",{interval:200})
sr.reveal(".contacto__img",{delay:400})
sr.reveal(".contacto__container",{interval:200})


sr.reveal(".titulo2",{delay:200})
sr.reveal(".subtitulo2",{delay:600})
sr.reveal(".imagen",{interval:300})
sr.reveal(".parrafo",{delay:700})


const de = ScrollReveal({
    origin: "bottom",
    distance: "80px",
    duration: 1000,
    reset: false      
})

de.reveal(".contact__input",{delay:400})
de.reveal(".contact__input-bis",{delay:400})


