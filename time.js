// Values
var first = document.getElementById("first");
var second = document.getElementById("second");
var third = document.getElementById("third");
var fourth = document.getElementById("fourth");
var colon = document.getElementById("span");

// Cards
var firstCard = document.getElementsByClassName("first-card");
var secondCard = document.getElementsByClassName("second-card");
var thirdCard = document.getElementsByClassName("third-card");
var fourthCard = document.getElementById("fourth-card");


function time(){
    var date = new Date;
    // Hours
    var hours = date.getHours().toString();
    if (hours < 10) hours = "0" + hours;

    var putOne = hours.charAt(0)
    var putTwo = hours.charAt(1)
    first.innerHTML = putOne;
    second.innerHTML = putTwo;

    // Minutes
    var minutes = date.getMinutes().toString();
    if (minutes < 10) minutes = "0" + minutes;
    var putThree = minutes.charAt(0)
    var putFour = minutes.charAt(1)
    third.innerHTML = putThree;
    fourth.innerHTML = putFour;

    // Seconds
    var seconds = date.getSeconds();
    console.log(seconds);
    if (seconds == 57){
        fourthCard.classList.toggle("card-change");
    }
    // Blinking colon
    colon.classList.toggle("colon");
}

setInterval("time();", 1000);