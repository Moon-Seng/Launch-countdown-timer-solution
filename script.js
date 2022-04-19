let dayEl = document.getElementById('dayEl');
let hourEl = document.getElementById('hourEl');
let minuteEl = document.getElementById('minuteEl');
let secondEl = document.getElementById('secondEl');


let countdown = function(){
    let openingDate = new Date("2024-05-20");
    let currentDate = new Date();
    
    let leftDate = (openingDate - currentDate)/1000
    
    let day = Math.floor(leftDate/3600/24);
    let hour = Math.floor(leftDate/3600)% 24;
    let min = Math.floor(leftDate/ 60 )%60;
    let sec = Math.floor(leftDate)%60;
    
    dayEl.innerHTML = day;
    hourEl.innerHTML = hour;
    minuteEl.innerHTML = addZero(min);
    secondEl.innerHTML = addZero(sec);
}

let addZero = function(index){
    return index < 10 ? `0${index}`: index;
}

setInterval(countdown , 1000)


