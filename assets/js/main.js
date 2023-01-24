/* Generador de PDF apartir de documentos HTML --> https://www.html2pdf.co.uk/
 * 
 */ 


// The showMenu function allows us to toggle between display and hide the nav-menu

const showMenu = (toggleId, navId) => {      //1er. param. el elem. con el event; 2do param. el elem. HTML al cual se agrega la clase show-menu
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

    // Validate that both variables exist
    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag where the nav-menu is, to show or hide the nav-menu.
            nav.classList.toggle('show-menu')
        })
    }
}

// calling the function with the corresponding arguments
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

// Get all sections that have an ID defined
const sections = document.querySelectorAll("section[id]");
sections.forEach(element => console.log(element));

function navHighlighter() {
  
  // Get current scroll position
  const scrollY = window.pageYOffset;
  console.log(scrollY);
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if ( scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link-highlight");
    } else {
        document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link-highlight");
    }
  });
}

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

/*==================== DARK LIGHT THEME ====================*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

/******************** REDUCE THE SIZE AND PRINT ON AN A4 SHEET ********************/ 
function scaleCv() {
    document.body.classList.add('scale-cv');
}

/*************** Eliminar el escalado del documento luego de haberse descargado *********************/ 
function removeScale() {
    document.body.classList.remove('scale-cv');
}

/******************* Generacion del PDF ********************/ 
// Area a mostrar en el PDF generado
let areaCv = document.getElementById('area-cv');

// Obtener el boton para generar el PDF
let resumeButton = document.getElementById('resume-button');


// Html2pdf optiones personalizadas sacadas de la Documentacion de la API.
var opt = {
    margin:       0,
    filename:     'myfile.pdf',
    image:        { type: 'jpeg', quality: 1.00 },
    html2canvas:  { scale: 4 },
    jsPDF:        { unit: 'mm', format: "a4"/*[210 , 443]*/, orientation: 'portrait' }
  };

// La funcion generateResume llama a la funcion de la API html2pdf para generar un PDF del area 
// que es pasado como primer parametro, junto con las opciones personalizadas como segundo parametro
function generateResume() {
    html2pdf(areaCv, opt);
}

// Cuando el boton de descargar el pdf es clickeado se ejecuta una secuencia de tres funciones
resumeButton.addEventListener('click', () => {
    // 1. Se agrega la clase 'scale-cv' al body, escalando todos los elementos
    scaleCv();

    // 2. Generar el PDF
    generateResume();

    // 3. La clase 'scale-cv' se quita del body al pasar 3.5s de haberse realizado el escalado
    setTimeout(removeScale, 3500);
})
