console.log("Script loaded");

const car = document.getElementById('car');
console.log("Car element:", car);

let carPosition = {
    left: 50,
    rotation: 0
};

const carSpeed = 10; // Speed of the car
const rotationSpeed = 5; // Speed of rotation

function updateCarPosition() {
    console.log("Updating car position:", carPosition);
    car.style.left = `${carPosition.left}%`;
    car.style.transform = `translateX(-50%) rotate(${carPosition.rotation}deg)`;
}

function moveCar(direction) {
    console.log("Moving car:", direction);
    if (direction === 'left' && carPosition.left > 20) { // Adjust boundary
        carPosition.left -= carSpeed / window.innerWidth * 100;
        carPosition.rotation = -rotationSpeed;
    }

    if (direction === 'right' && carPosition.left < 80) { // Adjust boundary
        carPosition.left += carSpeed / window.innerWidth * 100;
        carPosition.rotation = rotationSpeed;
    }

    updateCarPosition();
}

function stopCarRotation() {
    console.log("Stopping car rotation");
    carPosition.rotation = 0;
    updateCarPosition();
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        moveCar('left');
    }

    if (event.key === 'ArrowRight') {
        moveCar('right');
    }
});

document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        stopCarRotation();
    }
});

// Initial position update
updateCarPosition();
