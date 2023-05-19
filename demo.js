"use strict";

let username = prompt("Welcome to my page. What is your name?");
console.log("Hello" + "" + username);

let goodday=""
while (!(goodday ==="Yes"||goodday==="yes")) {  
  goodday = prompt("Are you having a good day?");
}
console.log(goodday);

function football () {
  let message = "";
  let football = prompt("Do you like Football?");
if (football === "Yes") {
  message = "That is my favorite sport";
} else {
  message = "What's wrong with you?";
}
alert (message)
}
  

