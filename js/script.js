const nav = document.querySelector('#nav');
const navClick = document.querySelector('#nav-click');

navClick.addEventListener('click', function(){
    nav.classList.toggle('activeNav');
})