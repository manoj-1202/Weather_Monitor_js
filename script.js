
const apiKey = "469f03b593abb21d5160747cc53a91cc";   //apiKey from open weather map

async function checkWeather(city) {  //using async to akes a city name as a parameter
    
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

// using try catch method to handling the network errors

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error('City Not Found...');   // if the searched city is not found throw error msg
        }

// json is used for converting other data to javascript format

        const data = await response.json();
        console.log(data);  //we can see this in console

//selecting a class using querSelector and fetching datas 

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)}°C`;
        document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
        document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

    }

// for error alert

    catch (error) {
        alert(error.message);
    }
}

// eventListener for search input 

document.querySelector(".search input").addEventListener("keydown", (event) => {

    if (event.key === "Enter") {   // for enter button press

        const searchBox = document.querySelector(".search input").value;


        if (searchBox) {    
            checkWeather(searchBox);
        } else {
            alert("Please enter a city name");
        }
    }
});


checkWeather("");

