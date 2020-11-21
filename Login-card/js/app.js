const signup = document.querySelector('#signup');
const signin = document.querySelector('#signin');
const card = document.querySelector('.login-card');

signup.addEventListener('click',function(){
    card.classList.add('signup-mode');
})
signin.addEventListener('click',function(){
    card.classList.remove('signup-mode');
})