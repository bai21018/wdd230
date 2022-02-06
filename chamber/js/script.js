function navinator() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += " responsive";
        } else {
          x.className = "topnav";
        }
      }

const today = new Date();
console.log(today);

const dayNumber = today.getDay();
console.log(dayNumber);


const element = document.getElementById("message_banner");
if (dayNumber == 1) {
  element.classList.add("showme");
} 
else if(dayNumber ==2) {
  element.classList.add("showme");
}
else {
  element.classList.add("hideme");
}