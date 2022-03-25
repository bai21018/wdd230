//hambuger
function navclick() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  








  /*WEATHER API*/
  let lon;
  let lat;
  let temperature = document.querySelector(".temp");
  let summary = document.querySelector(".summary");
  let loc = document.querySelector(".location");
  let icon = document.querySelector(".icon");
  const kelvin = 273;
    
  window.addEventListener("load", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        lon = position.coords.longitude;
        lat = position.coords.latitude;
    
        // API ID
        const api = "f05d456c3bb6c868d02fe9a0611dcb04";
    
        // API URL
        const base =
  `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&` +
  `lon=${lon}&appid=f05d456c3bb6c868d02fe9a0611dcb04`;
    
        // Calling the API
        fetch(base)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            console.log(data);
            temperature.textContent = 
                Math.floor(data.main.temp - kelvin) + "°C";
            summary.textContent = data.weather[0].description;
            loc.textContent = data.name + "," + data.sys.country;
            let icon1 = data.weather[0].icon;
            icon.innerHTML = 
                `<img src="icons/${icon1}.svg" style= 'height:10rem'/>`;
          });
      });
    }
  });
