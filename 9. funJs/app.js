let pageY = document.querySelector('#y');
let pageX = document.querySelector('#x');
let button = document.querySelector( 'button' );
let btn = document.querySelector( '.btn' );
let name = document.querySelector('.name')
let email = document.querySelector('.email')

btn.addEventListener('mousemove', function(event){

    if(name.value.length > 5 &&  email.value.length > 5){
        return false;
    } else{

        pageY.innerHTML = event.pageY;
        pageX.innerHTML = event.pageX;
        button.style.marginLeft = ((event.pageX - btn.offsetLeft) >= (btn.offsetWidth/2) ? -50 : 50)  + (event.pageX - btn.offsetLeft) + "px";
        button.style.marginTop = ((event.pageY - btn.offsetTop) >= (btn.offsetHeight/2) ? -50 : 50)  + (event.pageY - btn.offsetTop) + "px";


    }
    // if(event.pageX)
});


btn.addEventListener('mouseleave', function(e){
    button.style.marginTop = 0
    button.style.marginLeft = 0
})