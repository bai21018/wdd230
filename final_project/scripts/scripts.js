//hambuger
function navclick() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

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
function get_weather(i){
  var key = "f05d456c3bb6c868d02fe9a0611dcb04";
  var Lat = "40.9180";
  var Lon = "111.8722";

  fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+Lat+'&lon='+Lon+'&appid='+key)
      .then(result => result.json())
      .then((output) => {
          print_day(i);
        document.getElementById("temp" + i).innerHTML = ((output.daily[i].temp.day -273.15) * 9/5 + 32).toFixed(2);
        document.getElementById("description" + i).innerHTML = output.daily[i].weather[0].description;
        document.getElementById("humidity" + i).innerHTML = output.daily[i].humidity;
        /*return output;*/       
}
).catch(err => console.error(err));
}

function print_day(i) {
  var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  document.getElementById("day" + i).innerHTML = daylist[day +i]; 
};

for (let i = 0; i <= 2; i++){
    get_weather(i);
};

data = {"temples": [{
"name": "Salt Lake City, Utah Temple",
  "address": "50 W North Temple St, Salt Lake City UT 84150-9709, United States",
  "phone": "(1) 948-321-5108",
  "services": "Closed for Rennovations.",
  "history": "Announced July 28th, 1847. Groundbreaking on Februrary 14th, 1853. Ddedicated April 6th, 1893.",
  "ordinance": "Not Available At This Time. ",
  "schedule": "Closed for Rennovations.",
  "closures": "Closed for Rennovations."
},{
   "name": "St. Paul, Minnesota Temple",
  "address": "2150 Hadley Ave N, Oakdale MN 55128-4505, United States",
  "phone": "(1) 651-748-5910",
  "services": "No clothing rental, patron housing, distribution center, or cafeteria available. No distribution center nearby",
  "history": "Announced July 29th, 1998. Groundbreaking on September 26th, 1998. Dedicated January 9th, 2000.",
  "ordinance": "By Appointment Only.",
  "schedule": "By Appointment Only.",
  "closures": "Saturday, 2 April 2022 | Monday, 1 August 2022 - Monday, 12 September 2022 | Saturday, 1 October 2022 | Wednesday, 23 November 2022 (Limited Operations) | Thursday, 24 November 2022 | Saturday, 24 December 2022 | Saturday, 31 December 2022 (Limited Operations)"
},{
   "name": "Nauvoo, Illonois Temple",
  "address": "50 N Wells St, Nauvoo IL 62354, United States",
  "phone": "(1) 217-453-6252",
  "services": "Clothing rental available. No cafeteria or patron housing. No distribution center nearby",
  "history": "Announced April 4th, 1999. Groundbreaking October 24th, 1999. Dedicated June 27th, 2002.",
  "ordinance": "By Appointment Only.",
  "schedule": "By Appointment Only.",
  "closures": "Monday, 28 March 2022 - Monday, 23 May 2022 | Monday, 26 September 2022 - Monday, 24 October 2022 | Thursday, 24 November 2022 | Saturday, 24 December 2022 | Saturday, 31 December 2022"
},{
"name": "Nashville, Tennessee Temple",
  "address": "1100 Gray Fox Ln, Franklin TN 37069, United States",
  "phone": "(1) 615-791-8668",
  "services": "No clothing rental, cafeteria, or patron housing available. No distribution center nearby",
  "history": "Announced November 9th, 1994. Groundbreaking March 13th, 1999. Dedicated May 21st, 2000.",
  "ordinance": "",
  "schedule": "",
  "closures": "Saturday, 2 April 2022 | Monday, 2 May 2022 - Monday, 16 May 2022 | Saturday, 1 October 2022 | Monday, 7 November 2022 - Monday, 21 November 2022 | Thursday, 24 November 2022"
}]};

function get_temples_entry(i){

/*var data = JSON.parse(json);*/
document.getElementById("temple_name" + i).innerHTML = data.temples[i].name;
document.getElementById("temple_address" + i).innerHTML = data.temples[i].address;
document.getElementById("temple_phone" + i).innerHTML = data.temples[i].phone;
document.getElementById("temple_services" + i).innerHTML = data.temples[i].services;
document.getElementById("temple_history" + i).innerHTML = data.temples[i].history;
document.getElementById("temple_ordinance" + i).innerHTML = data.temples[i].ordinance;
document.getElementById("temple_schedule" + i).innerHTML = data.temples[i].schedule;
document.getElementById("temple_closures" + i).innerHTML = data.temples[i].closures;
};

for (let i = 0; i <= 3; i++){
    get_temples_entry(i);
};

console.log(data);