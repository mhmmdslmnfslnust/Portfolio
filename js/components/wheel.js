const wheels = document.querySelectorAll(".ship-wheel, .ship-wheel2");

function updateWheelRotation() {
    const angle = window.getRotationAngle();

    wheels.forEach((wheel) => {
        if (wheel.classList.contains("ship-wheel2")) {
            wheel.style.transform =
                `translate(50%, -50%) rotate(${-angle}deg)`;
        } else {
            wheel.style.transform =
                `translate(-50%, -50%) rotate(${angle}deg)`;
        }
    });
}

window.addEventListener("scroll", updateWheelRotation);
window.addEventListener("resize", updateWheelRotation);
window.addEventListener("load", updateWheelRotation);