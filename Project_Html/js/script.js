document.addEventListener("DOMContentLoaded", function () {
    let car = document.querySelector(".car");
    let position = window.innerWidth;

    function moveCar() {
        position -= 5;
        car.style.left = position + "px";

        if (position > -200) {
            requestAnimationFrame(moveCar);
        } else {
            position = window.innerWidth;
            requestAnimationFrame(moveCar);
        }
    }

    moveCar();
});
