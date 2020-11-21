
const signupBtn = document.querySelector('#sign-up-btn');
const signinBtn = document.querySelector('#sign-in-btn');
const container = document.querySelector('.container');

signupBtn.addEventListener("click",function(){
    container.classList.add('sign-up-mode');
});
signinBtn.addEventListener("click",function(){
    container.classList.remove('sign-up-mode');
});
