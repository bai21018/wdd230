//get date
var display_date = new Date();
document.getElementById("current_time").innerHTML = display_date.toDateString();

let copyyear = display_date.getFullYear();
document.getElementById("copy_year").innerHTML = copyyear;

//message banner
var banner_days = display_date.getDay();
if (banner_days == 1 || banner_days == 2) {
  document.getElementById("message_banner").style.display = "block";
};

//hambuger
function navclick() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function write_date() {
//Creating a timestamp
var d = Date.now();

var lv = localStorage.getItem("lastvisit");

var timesub = Math.abs(d - lv);
var timediff = Math.ceil(timesub / 1000);

// Retrieve
document.getElementById("last_time").innerHTML = timediff;

localStorage.setItem("lastvisit", d);

}

function get_weather(){
  var key = "f05d456c3bb6c868d02fe9a0611dcb04";
  var Lat = "40.9180";
  var Lon = "111.8722";

  fetch('https://api.openweathermap.org/data/2.5/weather?lat='+Lat+'&lon='+Lon+'&appid='+key)
      .then(result => result.json())
      .then((output) => {
        document.getElementById("degrees").innerHTML = output.main.temp;
        document.getElementById("wind-speed").innerHTML = output.wind.speed;
        document.getElementById("weatherdesc").innerHTML = output.weather[0].description;
        var windChillCelsius = 35.74 + 0.6215 * output.main.temp - 35.75 * output.wind.speed ** 0.16 + 0.4275 * output.main.temp * output.wind.speed ** 0.16;
        document.getElementById("wind-chill").innerHTML = windChillCelsius.toFixed(2);
        /*return output;*/       
}
).catch(err => console.error(err));

}

function get_directory_entry(json,number){

  var data = JSON.parse(json);

 html = "<center><img class='directory_image' src='" + data.businesses[number].logo + "'>";
 html += "<h4>" + data.businesses[number].name + "</h4>";
 html += "<p class='directory_phone'>" + data.businesses[number].phone + "</p>";
 html += "<p class='directory_address'>" + data.businesses[number].address + "</p>";
 html += "<p><a href='" + data.businesses[number].website + "'>" + data.businesses[number].website + "</a></p></center>";



 document.getElementById("entry-"+number).innerHTML = html;
}

write_date();