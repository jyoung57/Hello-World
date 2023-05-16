'use strict';

let username = prompt('What is your name?);
console.log('Hello' + '' + username);

let time = prompt('What hour is it? (0-23)');

let message = 'Hello';
let x = 5;
x ** 5;

if (time <= 11) {
    message = 'Good morning'
} else if (time <=18) {
    message = 'Good afternoon'
} else if (time <24) {
    message = 'Good evening'
} else {
    message = 'That hour does not exist'
}