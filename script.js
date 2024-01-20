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

const buttonUrls = [
  'https://github.com/ManisaBachtiar/Food-Choices',
  'https://food-choices.vercel.app/',
  'https://github.com/ManisaBachtiar/manisaBachtiar.github.io',
  'https://manisabachtiar.github.io/',
  'https://dribbble.com/shots/17144625-Cats-Marketplace',
  'https://dribbble.com/shots/17219512-English-Course'
];

for (let i = 1; i <= buttonUrls.length; i++) {
  const btn = document.getElementById(`btn${i}`);
  if (btn) {
    btn.addEventListener('click', function() {
      window.location.href = buttonUrls[i - 1];
    });
  }
}
