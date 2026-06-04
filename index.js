const APIkey = "b6eba738f3556a892d97618350d974ee";
const APIurl = "https://api.openweathermap.org/data/2.5/weather?q=germany&appid=b6eba738f3556a892d97618350d974ee&units=metric";

const searchbox = document.querySelector("search input");
const searchbutton = document.querySelector("search button");

async function checkweather(city) {
    const response = await fetch(APIurl + city + `&appid=${APIkey}`);
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".Humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";



    console.log(data);


}
searchbutton.addEventListener("click", () => {
    checkweather(searchbox.value);
});