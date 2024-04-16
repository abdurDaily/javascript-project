let contrast = document.querySelector('.contrast');
let image = document.querySelector('.image');

contrast.addEventListener('input',()=>{
    let contrastValue = contrast.value = Number(contrast.value);
    image.style.filter =  `contrast(${contrastValue}%)`;
});