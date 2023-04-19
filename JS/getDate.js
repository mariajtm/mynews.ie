function getDate (){
    const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// current date format can be modified using below:
let currentDate = `${day}/${month}/${year}`;
console.log(currentDate); 

document.getElementById("currentDate").innerHTML = currentDate;

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let currentDay = weekday[d.getDay()];
document.getElementById("todayIs").innerHTML = currentDay;
}