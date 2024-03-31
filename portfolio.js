let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a')


window.onscroll = () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a [href*=' + id + ' ] ' ).classList.add ('active');
            })
        }
    })
}

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// owl carousel script
// $('.carousel').owlCarousel({
//     margin: 20,
//     loop: true,
//     autoplay: true,
//     autoplayTimeOut: 2000,
//     autoplayHoverPause: true,
//     responsive: {
//         0:{
//             items: 1,
//             nav: false
//         },
//         600:{
//             items: 2,
//             nav: false
//         },
//         1000:{
//             items: 3,
//             nav: false
//         }
//     }
//    });