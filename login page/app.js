const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const closebtn = document.querySelector('.icon-close');


registerLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior
  wrapper.classList.add('active');
});

loginLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent the default link behavior
  wrapper.classList.remove('active');
});

btnPopup.addEventListener('click', (event) => {
  wrapper.classList.add('active-popup')
});


closebtn.addEventListener('click', (event) => {
  wrapper.classList.remove('active-popup')

});
