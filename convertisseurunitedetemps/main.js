const convert = document.getElementById("convert") ;
const secondsInMinute = 60;
const minutesInHour = 60;
const hoursInDay = 24;
const daysInYear = 365;

convert.addEventListener("click", function() {
    let numberOfYears = document.getElementById("numberOfYears").value ;

    let days = daysInYear*numberOfYears;
    let hour = days*hoursInDay;
    let minute = hour*minutesInHour;
    let second = minute*secondsInMinute;
    
    resultDays.innerHTML='Dans '+numberOfYears+ ' ans il y a ' +days+ ' jours.';
    resultHours.innerHTML='Dans '+numberOfYears+ ' ans il y a ' +hour+ ' heure.';
    resultMinutes.innerHTML='Dans '+numberOfYears+ ' ans il y a ' +minute+ ' minutes.';
    resultSeconds.innerHTML='Dans '+numberOfYears+ ' ans il y a ' +second+ ' secondes.';
});














































// Y