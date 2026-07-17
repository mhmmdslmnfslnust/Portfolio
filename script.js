const wheels = document.querySelectorAll(".ship-wheel, .ship-wheel2");

function updateWheelRotation() {
    const scrollY = window.scrollY;

    wheels.forEach((wheel) => {
        const radius = wheel.offsetWidth / 2;
        const circumference = 2 * Math.PI * radius;

        const angle = (scrollY / circumference) * -360;

        if (wheel.classList.contains("ship-wheel2")) {
            wheel.style.transform = `translate(50%, -50%) rotate(${-angle}deg)`;
        } else {
            wheel.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
        }
    });
}

window.addEventListener("scroll", updateWheelRotation);
window.addEventListener("resize", updateWheelRotation);
window.addEventListener("load", updateWheelRotation);