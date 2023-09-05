const sliderBox = document.querySelector(".slider");
const arrowUp = document.querySelector(".arrowUp");
const arrowDown = document.querySelector(".arrowDown");

let x = 0;

arrowUp.addEventListener("click", () => {
    if (x > "-900") {
        x = x - 300;
        sliderBox.style.top = x + "px";
    }
});

arrowDown.addEventListener("click", () => {
    if (x < 0) {
        x = x + 300;
        sliderBox.style.top = x + "px";
    }
});