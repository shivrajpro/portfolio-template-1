const hamburger =  document.querySelector('.header .hamburger');
const mobile_menu = document.querySelector('.header .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

document.addEventListener('scroll', ()=>{
    let scroll_position = window.scrollY;
    
    if(scroll_position > 250)
    header.style.backgroundColor = '#29323c';
    else
    header.style.backgroundColor = 'rgba(31, 30, 30, 0.8)';
})

menu_item.forEach((item)=>{
    item.addEventListener('click',()=>{
        hamburger.classList.toggle('active');
        mobile_menu.classList.toggle('active');
    })
})