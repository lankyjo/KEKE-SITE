/*=============== SHOW MENU ===============*/
const menu = document.getElementById('menu')
const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('nav-close')
const navLink = document.querySelectorAll('.nav-link')

menuBtn.addEventListener('click', ()=>{
    menu.style.right = '0px';
})
closeBtn.addEventListener('click', ()=>{
    menu.style.right = '-100%';
})

/*=============== REMOVE MENU MOBILE ===============*/
navLink.forEach((link)=>{
    link.addEventListener('click', ()=>{
        menu.style.right = '-100%';
    })
})
document.querySelector('.main').addEventListener('click', ()=>{
    menu.style.right = '-100%';
})
window.onscroll = ()=>  {
    window.scrollY >=200 ? document.querySelector('header').classList.add('blur') : document.querySelector('header').classList.remove('blur')
}
/*=============== SWIPER CAR ===============*/
window.onload = ()=>{

    const swiperHome = new Swiper('.home-swiper', {
        speed: 1200,
        effect: 'fade',
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + String(index + 1).padStart(2,'0') + "</span>";
              },
        },
    });
    
}

/*=============== GSAP ANIMATION ===============*/
gsap.from('.home-panel-1', {y: -1000, duration: 2})
gsap.from('.home-panel-2', {y: 1000, duration: 2})
gsap.from('.home-image', {x: 1000, duration: 5})



/*=============== ADD BLUR HEADER ===============*/
