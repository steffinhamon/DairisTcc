 window.onload = function() {
        document.querySelector('.container-principal').classList.add('loaded');
    }


const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');


hamburger.addEventListener('click', () => {
    
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});
