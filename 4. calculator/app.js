let displayBox = document.querySelector('.display-box');


let seven = document.querySelector('.seven');
let eight = document.querySelector('.eight');
let nine = document.querySelector('.nine');


let four = document.querySelector('.four');
let five = document.querySelector('.five');
let six = document.querySelector('.six');


let singleZero = document.querySelector('.single-zero');
let doubleZero = document.querySelector('.double-zero');



let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');



let devition = document.querySelector('.devition');
let equal = document.querySelector('.equal');
let multiply = document.querySelector('.multiply');
let addition = document.querySelector('.addition');




let ac = document.querySelector('.ac');
let dl = document.querySelector('.dl');
let minus = document.querySelector('.minus');


ac.addEventListener('click', function(){
    displayBox.value = '';
});

dl.addEventListener('click', function(){
    displayBox.value = displayBox.value.toString().slice(0,-1);
});

minus.addEventListener('click', function(){
    displayBox.value += minus.value;
});






seven.addEventListener('click', function(){
    displayBox.value += seven.value;
});


eight.addEventListener('click', function(){
    displayBox.value += eight.value;
});

nine.addEventListener('click', function(){
    displayBox.value += nine.value;
});

four.addEventListener('click', function(){
    displayBox.value += four.value;
});

five.addEventListener('click', function(){
    displayBox.value += five.value;
});

six.addEventListener('click', function(){
    displayBox.value += six.value;
});


one.addEventListener('click', function(){
    displayBox.value += one.value;
});

two.addEventListener('click', function(){
    displayBox.value += two.value;
});

three.addEventListener('click', function(){
    displayBox.value += three.value;
});

singleZero.addEventListener('click', function(){
    displayBox.value += singleZero.value;
});

doubleZero.addEventListener('click', function(){
    displayBox.value += doubleZero.value;
});





devition.addEventListener('click', function(){
    displayBox.value += devition.value;
});


multiply.addEventListener('click', function(){
    displayBox.value += multiply.value;
});

addition.addEventListener('click', function(){
    displayBox.value += addition.value;
});


equal.addEventListener('click', function(){
    displayBox.value = eval(displayBox.value);
});









