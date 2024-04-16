let input = document.querySelector('.input');
let btn = document.querySelector('.btn');
let ul = document.querySelector('ul');


btn.addEventListener('click',()=>{
    function addTask(){
        if(input.value === ''){
            alert('not ok!');
        }else{
            let li = document.createElement("li");
            li.innerHTML = input.value;
            ul.appendChild(li); 
        }
        input.value = '';
        saveData();
    }
    addTask();
})


function saveData(){
    localStorage.setItem("data", ul.innerHTML);
}





let passInput = document.querySelector('.pass');
let passBtn = document.querySelector('.passBtn');
const length = 12;

passBtn.addEventListener('click', function(){
    
   let password = "";
   let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let lowerCase = "abcdefghijklmnopqrstuvwxyz";
   let number = "01234567890";
   let specialCharacters = "@#$%^&*()_-+=?/|";
   let allPass = upperCase +  lowerCase + number + specialCharacters;


   password += upperCase[Math.floor(Math.random(upperCase) * upperCase.length)];
   password += lowerCase[Math.floor(Math.random(lowerCase) * lowerCase.length)];
   password += number[Math.floor(Math.random(number) * number.length)];
   password += specialCharacters[Math.floor(Math.random(specialCharacters) * specialCharacters.length)];
   
   
   if(allPass > password.length){
       password += allPass[Math.floor(Math.random(allPass) * allPass.length)];
   }

   passInput.value = password;

});