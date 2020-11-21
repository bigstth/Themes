const login = document.querySelector("#login");
const signup = document.querySelector("#register");
const container = document.querySelector(".container");
login.addEventListener("click", function () {
  container.classList.remove("sign-up-mode");
});
signup.addEventListener("click", function () {
  container.classList.add("sign-up-mode");
});
