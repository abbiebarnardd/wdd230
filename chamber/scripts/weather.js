// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const speed = document.querySelector('#windSpeed');


const url = "https://api.openweathermap.org/data/2.5/weather?q=Mesquite&units=imperial&appid=1373c7c17cddfb5ba77da2c14aa22802"



async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data); // this is for testing the call
        displayResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  apiFetch();

  function displayResults(weatherData) {
    currentTemp.innerHTML = `Temperature: <strong>${weatherData.main.temp.toFixed(0)} &deg;F</strong>`;
    speed.innerHTML = `Wind Speed: ${weatherData.wind.speed.toFixed(0)} mph`;
    
  
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
  
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

    let t = weatherData.main.temp.toFixed(0);
    let s = weatherData.wind.speed.toFixed(0);
    let w = "";

    if (t <=50 && s> 3) {
      w = "Wind Chill: " + Math.round(35.74 + 0.6215 * t -35.75 * s **0.16 + 0.4275 * t * s ** 0.16);
      document.getElementById("windChill").innerHTML = w.toString();
    }

    else {
      w = "Wind Chill: N/A";
      document.getElementById("windChill").innerHTML = w.toString();
    }
  }

  displayResults();