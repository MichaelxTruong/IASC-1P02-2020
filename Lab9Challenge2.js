var age = prompt("What is your age?");
var todayDate = new Date();

var birthYear = todayDate.getFullYear() - age;

document.getElementById("yearoutput").innerHTML = birthYear;
