const daysE1 = document.getElementById("days");
const hoursE1 = document.getElementById("hours");
const minE1 = document.getElementById("mins");
const secondsE1 = document.getElementById("seconds");


const newYears = "1 jan 2023";

function countdown(){
    const newYearsDate= new Date(newYears);
    const currentDate = new Date();

    const totalseconds = (newYearsDate-currentDate)/1000;

    const days = Math.floor(totalseconds / 3600 / 24);
    const hours = Math.floor(totalseconds / 3600) % 24;
    const mins = Math.floor(totalseconds / 60) % 60;
    const seconds = Math.floor(totalseconds)%60;

    daysE1.innerHTML=days;
    hoursE1.innerHTML=formatTime(hours);
    minE1.innerHTML=formatTime(mins);
    secondsE1.innerHTML=formatTime(seconds);

}
function formatTime(time){
    return time

}

countdown();
setInterval(countdown, 1000);




