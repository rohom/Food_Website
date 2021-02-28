    // show-menu
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if(toggle && nav){
        toggle.addEventListener('click', ()=> {
            nav.classList.toggle('show_menu');
        })
    }
}
showMenu('nav_toggle','nav_menu');

// remove-menu

const navLink = document.querySelectorAll('.nav_link');

function linkAction(){
    const navMenu = document.getElementById('nav_menu');
    navMenu.classList.remove('show_menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction));

// SCROLL SECTION ACTIVE LINK

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*= ' + sectionId + ']').classList.add('active_link');
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link');
        }

    })
}
window.addEventListener('scroll' ,scrollActive);


// CHANGE BACKGROUND HEADER

function scrollHeader(){
    const nav = document.getElementById('header');
    if(this.scrollY >= 200) nav.classList.add('scroll_header');
        else nav.classList.remove('scroll_header');
}
window.addEventListener('scroll', scrollHeader);

function scrollTop(){
    const scrollTop= document.getElementById('scroll_top');
    if(this.scrollY >= 560) scrollTop.classList.add('scroll-top');
        else scrollTop.classList.remove('scroll-top');
}
window.addEventListener('scroll', scrollTop);

// Dark Light Theme
const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';
//previously selected topic

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark':'light';
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx-moon':'bx-sun';

if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    themeButton.classList[selectedTheme === 'bx-moon'? 'add': 'remove'](iconTheme);
}

themeButton.addEventListener('click', ()=>{
    // Add or remove the dark theme / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // save the theme
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
})
// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '30px',
    duration: '2000',
    reset: true
});
sr.reveal('.home_data,.home_img,.about_data,.about_img,.services_content,.menu_content,.app_data,.app_img,.contact_data,.contact_button,.footer_content',{
    interval:200
})

