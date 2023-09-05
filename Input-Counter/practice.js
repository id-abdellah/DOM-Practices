const input = document.querySelector("input");
const progress = document.querySelector(".progress");
const counter = document.querySelector(".counter");

let maxLength = input.getAttribute("maxlength")

counter.innerHTML = maxLength;

input.addEventListener("input", () => {
    counter.innerHTML = maxLength - input.value.length;

    // When reach 0 turn the color of counter to Black
    counter.innerHTML == 0 ? counter.style.color = "red" : counter.style.color = "black";

    // set the progress
    progress.style.width = `${(input.value.length * 100) / maxLength}%`;
    progress.style.width == "100%" ? progress.style.backgroundColor = "red" : progress.style.backgroundColor = "rgb(93, 184, 93)";
})