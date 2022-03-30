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

    /*const day_name ={
        days[0]:"Sunday",
        days[1]:"Monday",
        days[2]:"Tuesday",
        days[3]:"Wednesday",
        days[4]:"Thursday",
        days[5]:"Friday",
        days[6]:"Saturday"}*/

        /*const day_of_week = new Date();
        const day = day_of_week.getDay();

        var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var d = new Date();
        var dayName = days[d.getDay()];*/

    

    fetch('https://api.openweathermap.org/data/2.5/onecall?lat='+Lat+'&lon='+Lon+'&appid='+key)
        .then(result => result.json())
        .then((output) => {
            console.log(output);
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
    console.log(daylist[day + i]); /* debugging */ 
    document.getElementById("day" + i).innerHTML = daylist[day +i]; 
  }

  for (let i = 0; i <= 2; i++){
      get_weather(i);
  }