// login
// save username
// greetings 

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greetings = document.querySelector("#greetings");
const link = document.querySelector("a");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintingGreeting(username);
}

function paintGreeting(username){
    greetings.innerText = `Keep it up, ${username}!`;
    greetings.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    paintGreeting(savedUsername);
}

