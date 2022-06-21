
/**
 * Define Global Variables
 * 
*/
const navBar = document.getElementById('navbar__list')
const sections = document.querySelectorAll('section')
const fullVisibleNavBar = document.querySelector('.page__header')

/**
 * End Global Variabless
 * Start Helper Functions
 * 
*/

// ----Hide Scroll Bar ---- //
/* Hide navBar when user scrolls down*/

// ------'ASSIGN STATE' HELPER FUNCTION------

let prevScrollPosistion = window.scrollY

window.addEventListener('scroll', () => {
    if (prevScrollPosistion < window.scrollY) {
        fullVisibleNavBar.classList.add('invisible-navbar')
    } else {
        fullVisibleNavBar.classList.remove('invisible-navbar')
    }
    prevScrollPosistion = window.scrollY
})


document.addEventListener('scroll', function() {
   sections.forEach(section => {
    const activeLink = navBar.querySelector(`[data-nav=${section.id}]`)
    const position = section.getBoundingClientRect() 
        if (position.top <= 185
            && position.bottom >= 185) {
            section.className = 'active'
            activeLink.classList = 'active'
        } else {
            section.className = 'not-so-active'
            activeLink.classList = 'menu__link'
        } 
    return arrowHandler(section)
    }) 
})  

function arrowHandler(section) {
    document.addEventListener('scroll', function() {
        // const section = document.querySelectorAll('section')
        const setArrowState = document.getElementById('arrow-icon')
        if (section.className != 'active' && section.id != 'section1') {
            setArrowState.className = 'active'
        } else {
            setArrowState.className = 'not-so-active'
        }
        console.log(section.id, section.className)
    })
}
// arrowHandler()


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
function buildNavBar()  {
    sections.forEach(section => {
        const navMenuLink = document.createElement('li')
        navMenuLink.className = 'menu__link'
        navMenuLink.id = 'menu__link--' + section.id
        navBar.appendChild(navMenuLink).innerHTML += 
        ` 
        <a href="#${section.id}">
            <button data-nav="${section.id}">
                <h3>${section.id.toUpperCase()}</h3>
            </button>
        </a>
        `
       })
}
buildNavBar()



/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


