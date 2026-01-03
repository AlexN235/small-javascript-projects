const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveawayDate = new Date(2026, 6, 14, 12);
document.querySelector('.end-day').innerHTML = weekdays[giveawayDate.getDay()];
document.querySelector('.end-date').innerHTML = giveawayDate.getDate();
document.querySelector('.end-month').innerHTML = months[giveawayDate.getMonth()];
document.querySelector('.end-year').innerHTML = giveawayDate.getFullYear();
// get time
let min = giveawayDate.getMinutes();
if(min < 10) min = "0" + min;
document.querySelector('.end-time').innerHTML = giveawayDate.getHours() + " : " + min;

setInterval(test, 1000);
function test() {
    const currDate = new Date();
    let days = 0;
    let hours = giveawayDate.getHours() - currDate.getHours();
    let mins = giveawayDate.getMinutes() - currDate.getMinutes();
    let secs = giveawayDate.getSeconds() - currDate.getSeconds();
    
    if(giveawayDate - currDate < 0) {
        clearInterval();
        hours = 0;
        mins = 0;
        secs = 0;
    }
    else {
        // get second dfference
        if (secs < 0) {
            secs += 60;
            mins--;
        }
        // get minute difference
        if(mins < 0 ){
            mins += 60;
            hours--;
        }
        // get hours difference
        if(hours < 0) {
            hours += 24;
            days--;
        }
        days += Math.floor((giveawayDate - currDate) / (1000 * 60 * 60 * 24));
    }
    // get day difference
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".mins").innerHTML = mins;
    document.querySelector(".secs").innerHTML = secs;   
}