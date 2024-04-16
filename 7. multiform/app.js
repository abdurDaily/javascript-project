let form1 = document.querySelector('#form_1');
let form2 = document.querySelector('#form_2');
let form3 = document.querySelector('#form_3');

let next1 = document.querySelector('#next1');
let next2 = document.querySelector('#next2');

let back1 = document.querySelector('#back1');
let back2 = document.querySelector('#back2');

let progress = document.querySelector('#progress');

next1.addEventListener('click', function(){
   form1.style.left = "-450px";
   form2.style.left = "40px";
   progress.style.width = "240px";

});

next2.addEventListener('click', function(){
     form3.style.left = "40px";
     form2.style.left = "-450px";
     progress.style.width = "400px";
})


back1.addEventListener('click',function(){
  form1.style.left = "40px";
  form2.style.left = "450px";
  progress.style.width = "120px";
})


back2.addEventListener('click',function(){
  form2.style.left = "40px";
  form3.style.left = "450px";
  progress.style.width = "240px";
})