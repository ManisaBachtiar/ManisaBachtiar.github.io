const scriptURL = 'https://script.google.com/macros/s/AKfycbw4w5CNGwkej9UxeaZlY9v4AbO6w5YktbaHT9h_nleVogUXtj8Yg4f5wu6azPjm0vi_tQ/exec'
const form = document.forms['submit-to-google-sheet']
const btnSend =document.querySelector('.submit');
const load = document.querySelector('.loading');
form.addEventListener('submit', e => {
  e.preventDefault()
  load.classList.toggle('hidden');
  btnSend.classList.toggle('hidden');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        load.classList.toggle('hidden');
        btnSend.classList.toggle('hidden');
    
        Swal.fire({
        title: 'Success!',
        text: 'Your message has been successfully sent.',
        icon: 'Success',
        confirmButtonText: 'Ok'
      });
    })
    .catch(error => console.error('Error!', error.message))
})
let bar= document.getElementsByClassName('fa-bars')[0];
let close=document.getElementsByClassName('close')[0];
let navbar= document.getElementsByClassName('navbar')[0];

function toggle() {
    navbar.classList.toggle('hidden')
    close.classList.toggle('hidden')
}
function toggle2() {
    navbar.classList.toggle('hidden')
    close.classList.toggle('hidden')
}
close.addEventListener('click', toggle);
bar.addEventListener('click', toggle);

