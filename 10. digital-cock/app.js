let getHour = document.querySelector('.hour');
let getMin = document.querySelector('.min');
let getSec = document.querySelector('.sec');
let amPm = document.querySelector('.ampm');

setInterval(function(){

  let date = new Date();
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  
  let ampm = hour >= 12 ? 'pm' : 'am';
  let test = hour > 12 ? hour - 12 :  (hour  == 0 ? 12 : hour);

  getHour.innerHTML = test ;
  getMin.innerHTML = min;
  getSec.innerHTML = sec;
  amPm.innerHTML = ampm;

});






