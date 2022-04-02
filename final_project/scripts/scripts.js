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
      })
      /*
    } catch (error) {
        console.log(error);
    }
      */
      //.catch(err => { console.log("Something Broked!")});
      }

function print_day(i) {
  var today = new Date();
  var day = today.getDay();
  var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
  document.getElementById("day" + i).innerHTML = daylist[day +i]; 
};

function display_temples_entry(i, dat){
  document.getElementById("temple_name" + i).innerHTML = dat.temples[i].name;
  document.getElementById("temple_address" + i).innerHTML = dat.temples[i].address;
  document.getElementById("temple_phone" + i).innerHTML = dat.temples[i].phone;
  document.getElementById("temple_services" + i).innerHTML = dat.temples[i].services;
  document.getElementById("temple_history" + i).innerHTML = dat.temples[i].history;
  document.getElementById("temple_ordinance" + i).innerHTML = dat.temples[i].ordinance;
  document.getElementById("temple_schedule" + i).innerHTML = dat.temples[i].schedule;
  document.getElementById("temple_closures" + i).innerHTML = dat.temples[i].closures;
}

function likeIt() {
  if (typeof(Storage) !== "undefined") {
    if (sessionStorage.clickcount) {
      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
      alert(sessionStorage.clickcount);
      //toggle goes here
      //has already been liked...
    } else {
      //never been liked...
      sessionStorage.clickcount = 1;
    }
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
  }
}

fetch('https://raw.githubusercontent.com/bai21018/wdd230/e318525e9fae47b1cf30823d3492a18d13091a96/final_project/temples.json')
  .then(result => result.json())
  .then((output) => {
    for (let i = 0; i <= 3; i++){
      display_temples_entry(i, output);
   }
  });
