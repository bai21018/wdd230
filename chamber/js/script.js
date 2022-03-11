//get date
var display_date = new Date();
document.getElementById("current_time").innerHTML = display_date.toDateString();

//message banner
var banner_days = display_date.getDay();
if (banner_days == 1 || banner_days == 2) {
  document.getElementById("message_banner").style.display = "block";
};