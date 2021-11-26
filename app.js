const newYears = "1 Jan 2022";
const daycs1 = document.getElementById('day1s');
const hourcs1 = document.getElementById("hour1s");
const mincs1 = document.getElementById("min1s");
const seccs1 = document.getElementById("sec1s");


function countdown () {
const newYearsDate = new Date(newYears);
const currentdate = new Date();

const totalSeconds =  (newYearsDate - currentdate) / 1000;

const  days = Math.floor( totalSeconds / 3600 / 24);
const  hours = Math.floor( totalSeconds / 3600 ) % 24;
const  mins = Math.floor( totalSeconds / 60)  % 60;
const  secs = Math.floor( totalSeconds ) % 60;

console.log(days,hours,mins,secs);


 
daycs1.innerHTML = days;
hourcs1.innerHTML = hours;
mincs1.innerHTML = formatTime(mins);
seccs1.innerHTML = formatTime(secs);


//  console.log(newYearsDate-currentdate);
}
// format funtion for sec & min if less than 10
function formatTime(time){
    return time <10 ? ( `0${time}`) : time ;
}
// intial call#
countdown();
setInterval(countdown,1000);
