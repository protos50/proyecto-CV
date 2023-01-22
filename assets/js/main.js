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


/*==================== DARK LIGHT THEME ====================*/ 


/*==================== REDUCE THE SIZE AND PRINT ON AN A4 SHEET ====================*/ 


/*==================== REMOVE THE SIZE WHEN THE CV IS DOWNLOADED ====================*/ 


/*==================== GENERATE PDF ====================*/ 
// PDF generated area


// Html2pdf options


// Function to call areaCv and Html2Pdf options 


// When the button is clicked, it executes the three functions

    // 1. The class .scale-cv is added to the body, where it reduces the size of the elements


    // 2. The PDF is generated


    // 3. The .scale-cv class is removed from the body after 5 seconds to return to normal size.
