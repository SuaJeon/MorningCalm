// the coordinates of current location load
// bring weather info by api
// present on the page 

const API_KEY = "6af213b58ec1dbbaa704dfc82d187d76";

function onGeoExist(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then(response => response.json())
    .then(data => {
        const weather = document.querySelector("#weather span:nth-child(1)");
        const city = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:nth-child(3)");
        const name = data.name;

        weather.innerText = data.weather[0].main;
        city.innerText = data.name;
        temp.innerText = `${Math.floor(data.main.temp)}°C `;
    })
}

function onGeoError(){
    alert("Unable to find your current location! Please enable GPS option.")
}

navigator.geolocation.getCurrentPosition(onGeoExist, onGeoError);
