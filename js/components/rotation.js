window.getRotationAngle = function () {
    const wheel = document.querySelector(".ship-wheel");

    const scrollY = window.scrollY;
    const radius = wheel.offsetWidth / 2;
    const circumference = 2 * Math.PI * radius;

    return (scrollY / circumference) * -360;
};