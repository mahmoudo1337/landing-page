/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sectionList = document.querySelectorAll('section');
const navBar = document.querySelector('#navbar__list');

// navBar Creation and Linking

function createNavBar(){
    
    for (section of sectionList){
        sectionName = section.getAttribute('data-nav');
        sectionID = section.getAttribute('id')
        createListItem = document.createElement('li');
        createListItem.innerHTML = `<a class='menu__link' href='#${sectionID}'>${sectionName}</a>`
        navBar.appendChild(createListItem);
    }
}


createNavBar();
// When scrolling through sections, active section is detected and "your-active-class" is added.

function activeSection(){
    const smooth = document.querySelector('html');
    smooth.style.scrollBehavior = "smooth";
    window.addEventListener('scroll', ()=>{
        for (sec of sectionList){
            const rect = sec.getBoundingClientRect();
            if (rect.top >= -100 && rect.top <= 200){
                sec.classList.add("your-active-class");
            } else{
                sec.classList.remove("your-active-class");
            }
            
        }
    })

}
activeSection()



