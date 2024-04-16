let hue = document.querySelector('.hue');
let saturation = document.querySelector('.saturation');
let brightness = document.querySelector('.brightness');
let colorBox = document.querySelector('.color-box');


hue.addEventListener('input',()=>{
    let hueCode = document.querySelectorAll('.hueCode');
    hueCode.forEach(hueCode=>{
        let hueValue = hue.value;
        colorBox.style.backgroundColor=`hsl(${hueValue}, 100%, 50%`;
        hueCode.innerHTML= hueValue ;
    })
});


saturation.addEventListener('input',()=>{
    let saturationCode = document.querySelectorAll('.saturationCode');
    saturationCode.forEach(saturationCode =>{
        let saturationValue = saturation.value;
        colorBox.style.backgroundColor=`hsl(100, ${saturationValue}% , 50%)`;
        saturationCode.innerHTML= saturationValue ;
    })
});


brightness.addEventListener('input',()=>{
    let brightnessCode = document.querySelectorAll('.brightnessCode');
    brightnessCode.forEach(brightnessCode=>{
        let brightnessValue = brightness.value;
        colorBox.style.backgroundColor = `hsl(100, 100% , ${brightnessValue}%)`;
        brightnessCode.innerHTML= brightnessValue ;
    });
});
