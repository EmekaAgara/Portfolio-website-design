/*====================Menu SHOW Y HIDDEN +==============*/
const navMenu = document.getElementById('nav-menu'),
     navToggle = document.getElementById('nav-toggle'),
     navClose = document.getElementById('nav-close')
/*====================MENU SHOW +==============*/

/*====================VALIDATE IF CONSTANT EXISTS +==============*/
if(navToggle){
    navToggle.addEventListener('click',() =>{
        navMenu.classList.add('show-menu')
    })
}
/*====================MENU HIDDEN +==============*/
/*====================VALIDATE IF CONSTANT EXISTS +==============*/
if(navClose){
    navClose.addEventListener('click',() =>{
        navMenu.classList.remove('show-menu') 
    })
}
/*====================REMOVE MENU MOBILE +==============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*====================ACCORDIAN SKILLS +==============*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = 'skills__content skills__close'
    }
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((el) =>{
        el.addEventListener('click', toggleSkills)
})
/*====================QUALIFICATION TABS +==============*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active')

        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualificaction__active')
    })
})
/*====================SEERVICES MODAL +==============*/

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click',() =>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')

        })
    })
})

/*==================== portfolio swiper +==============*/
let swiperPortfolio = new Swiper('.portfolio__container', {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable:true
    },
});
/*==================== Testimonial +==============*/

let swiperTestimonial = new Swiper('.testimonial__container', {
    loop: true,
    grabCursor:true,
    spaceBetween:48,
   
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,
    },
    breakpoints:{
        568:{
            slidesPerView:2,
        }
    }
});

/*==================== Sscroll sections active link +==============*/


/*==================== Change Background header +==============*/
/*====================Show scroll up +==============*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // when your scroll is higher dan viewport 560 add show scroll class//
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('scroll-up')

}
window.addEventListener('scroll', scrollUp)

/*====================dark light theme +==============*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

/*====================Previously selected topic(if selected) +==============*/
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
/*====================we obtain the curent theme that the interface has by validating the dark theme class+==============*/
const getCurrentTheme = ()=> document.body.classList.contains(darkTheme)?'dark': 'light'
const getCurrentIcon =() => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

/*====================we validate if the user previously chose a topic +==============*/
if(selectedTheme){
    /*==================== if the validation is fulfilled,we ask what the issue was to know if we activated +==============*/  
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

 /*==================== Activate / deactivate the theme manually with the button +==============*/  
 themeButton.addEventListener('click',() =>{
      /*==================== add or remove the dark/icon theme +==============*/ 
      document.body.classList.toggle(darkTheme)
      themeButton.classList.toggle(iconTheme) 
       /*==================== we save the theme and the current icon that the user chose +==============*/
       localStorage.setItem('selected-theme',getCurrentTheme())
       localStorage.setItem('selected-icon',getCurrentIcon())  
 })


   /*==================== floating shapes +==============*/
 