let $daytime = document.querySelector(".daytime");
let $car = document.querySelector(".car");

addEventListener("keypress",function(x){
    if(x.which === 13){
        $daytime.classList.toggle("moving");
        $car.classList.toggle("suspention");
    }
});
