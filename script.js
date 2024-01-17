let bar= document.getElementsByClassName('fa-bars')[0];
let close=document.getElementsByClassName('close')[0];
let navbar= document.getElementsByClassName('navbar')[0];

function toggle() {
    if (navbar.classList.contains('hidden') || close.classList.contains('hidden')) {
        navbar.classList.remove('hidden');
        close.classList.remove('hidden');
    } else {
        navbar.classList.add('hidden');
        close.classList.add('hidden');
    }
}
function toggle2() {
    if (navbar.classList.contains('hidden') || close.classList.contains('hidden')) {
        navbar.classList.remove('hidden');
        close.classList.remove('hidden');
    } else {
        navbar.classList.add('hidden');
        close.classList.add('hidden');
    }
}
close.addEventListener('click', toggle);
bar.addEventListener('click', toggle);