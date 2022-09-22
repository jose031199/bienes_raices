document.addEventListener('DOMContentLoaded',()=>{

    eventListeners();

    darkMode();
}); //Waiting that all html and css are loaded

function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');

    //EventListenr when click the mobileMenu
    mobileMenu.addEventListener('click',navegacionResponsive)


    //console.log(mobileMenu);
}

function darkMode(){

    const preferDarkMode = window.matchMedia('(prefers-color-scheme: dark)')

    //console.log(preferDarkMode.matches);

    if(preferDarkMode.matches){ //Code to know of browser has dark-mode preferences or not
        document.body.classList.add('dark-mode')
    }else{
        document.body.classList.remove('dark-mode');
    }

    preferDarkMode.addEventListener('change',()=>{
        if(preferDarkMode.matches){ //Code to know of browser has dark-mode preferences or not
            document.body.classList.add('dark-mode')
        }else{
            document.body.classList.remove('dark-mode');
        }
    })

    const botonDarkMode = document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click',()=>{
        document.body.classList.toggle('dark-mode');
    })
}

function navegacionResponsive(){
    const navegacion = document.querySelector('.navegacion');

    navegacion.classList.toggle('mostrar');
    //console.log(e);
}

