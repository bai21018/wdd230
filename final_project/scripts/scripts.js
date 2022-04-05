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

/*function likeIt() {
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
}*/





/* ==== LIKE BUTTON ==== */

function SLCButtonCount() {
  toggleSLCButton();
    if (localStorage.SLCclickcount) {
      localStorage.SLCclickcount = Number(localStorage.SLCclickcount)+1;
    } else {
      localStorage.SLCclickcount = 1;
    }
    /* this will display the current click count */
    /*alert(localStorage.SLCclickcount);*/
    //alert("1st " + localStorage.SLCclickcount);
    toggleSLCButton();
  }


  //IT'S LOADING AFTER A REFRESH, NEED IT TO LOAD IMMEDIETNLY

  // I GOT IT YOU STUPID SON OF A BYTE, HAHAHAHA I THINK THE CREAMSODA IS GOING TO MY HEART

function toggleSLCButton() {
  //if the count is even
  var clickCount = Number(localStorage.SLCclickcount);
  if (clickCount % 2 == 0) {
    //alert("it's even!")
    document.getElementById("SLCFavoriteStatus").innerHTML = "Favorite";
    document.getElementById("SLCFavoriteStatus").classList = "not_favorited";
  }
  // if the count is odd
  else {
    document.getElementById("SLCFavoriteStatus").innerHTML = "Favorited!"
    document.getElementById("SLCFavoriteStatus").classList = "favorited";
}
}
/* ==== MN LIKE BUTTON ==== */

function MNButtonCount() {
  toggleMNButton();
    if (localStorage.MNclickcount) {
      localStorage.MNclickcount = Number(localStorage.MNclickcount)+1;
    } else {
      localStorage.MNclickcount = 1;
    }
    /* this will display the current click count */
    /*alert(localStorage.SLCclickcount);*/
    //alert("1st " + localStorage.SLCclickcount);
    toggleMNButton();
  }


  //IT'S LOADING AFTER A REFRESH, NEED IT TO LOAD IMMEDIETNLY

  // I GOT IT YOU STUPID SON OF A BYTE, HAHAHAHA I THINK THE CREAMSODA IS GOING TO MY HEART

function toggleMNButton() {
  //if the count is even
  var clickCount = Number(localStorage.MNclickcount);
  //alert("2nd " + localStorage.SLCclickcount);
  //alert("3rd " + clickCount);
  if (clickCount % 2 == 0) {
    //alert("it's even!")
    document.getElementById("MNFavoriteStatus").innerHTML = "Favorite";
    document.getElementById("MNFavoriteStatus").classList = "not_favorited";
  }
  // if the count is odd
  else {
    //alert("It's odd! Like you, mannen.") 
    document.getElementById("MNFavoriteStatus").innerHTML = "Favorited!"
    document.getElementById("MNFavoriteStatus").classList = "favorited";
}
}

/* ==== IL FAVORITE BUTTON ==== */
function ILButtonCount() {
  toggleILButton();
    if (localStorage.ILclickcount) {
      localStorage.ILclickcount = Number(localStorage.ILclickcount)+1;
    } else {
      localStorage.ILclickcount = 1;
    }
    /* this will display the current click count */
    toggleILButton();
  }

  function toggleILButton() {
    //if the count is even
    var clickCount = Number(localStorage.ILclickcount);
    if (clickCount % 2 == 0) {
      //alert("it's even!")
      document.getElementById("ILFavoriteStatus").innerHTML = "Favorite";
      document.getElementById("ILFavoriteStatus").classList = "not_favorited";
    }
    // if the count is odd
    else {
      document.getElementById("ILFavoriteStatus").innerHTML = "Favorited!"
      document.getElementById("ILFavoriteStatus").classList = "favorited";
  }
  }

/* ==== TN FAVORITE BUTTON ==== */
function TNButtonCount() {
  toggleTNButton();
    if (localStorage.TNclickcount) {
      localStorage.TNclickcount = Number(localStorage.TNclickcount)+1;
    } else {
      localStorage.TNclickcount = 1;
    }
    /* this will display the current click count */
    toggleTNButton();
  }

  function toggleTNButton() {
    //if the count is even
    var clickCount = Number(localStorage.TNclickcount);
    if (clickCount % 2 == 0) {
      //alert("it's even!")
      document.getElementById("TNFavoriteStatus").innerHTML = "Favorite";
      document.getElementById("TNFavoriteStatus").classList = "not_favorited";
    }
    // if the count is odd
    else {
      document.getElementById("TNFavoriteStatus").innerHTML = "Favorited!"
      document.getElementById("TNFavoriteStatus").classList = "favorited";
  }
  }




function getModifiedDate () {
  document.getElementById("last_modified").innerHTML = document.lastModified;
}
