let urlAddress = document.querySelector('.url-address');
let btnBox = document.querySelector('.btn-box');
let img = document.querySelector('img');


btnBox.addEventListener('click', function(){
  let url = "https://api.qrserver.com/v1/create-qr-code/?data=";
  img.src = url + urlAddress.value;

});

