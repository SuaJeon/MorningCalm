const clock = document.querySelector("h2#clock");

function getClock(){
    const dates = new Date();
    const hours = String(dates.getHours()).padStart(2,"0");
    const minutes = String(dates.getMinutes()).padStart(2,"0");
    const seconds = String(dates.getSeconds()).padStart(2, "0");

    clock.innerText = (`${hours} : ${minutes} : ${seconds}`);
}

getClock(); // run immediately
setInterval(getClock, 1000); // run after 1000ms