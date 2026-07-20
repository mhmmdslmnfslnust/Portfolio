const fan = document.querySelector(".fan");

function updateFanRotation() {
    const angle = window.getRotationAngle();

    fan.style.transform =
        `translateY(-50%) rotate(${angle}deg)`;
}

window.addEventListener("scroll", updateFanRotation);
window.addEventListener("resize", updateFanRotation);
window.addEventListener("load", updateFanRotation);