const box = document.querySelector(".box")

const topLeft = document.querySelector(".t-l")
const topRight = document.querySelector(".t-r")
const bottomRight = document.querySelector(".b-r")
const bottomLeft = document.querySelector(".b-l")

let arrOfInputs = [topLeft, topRight, bottomLeft, bottomRight];


const output = document.querySelector(".output input");


const setWidth = document.querySelector(".w")
const setHeight = document.querySelector(".h")
const setBtn = document.querySelector(".h-w button")


setBtn.addEventListener("click", () => {
    box.style.width = `${setWidth.value}px`;
    box.style.height = `${setHeight.value}px`;

    arrOfInputs.forEach((el) => {
        el.max = (+setWidth.value + +setHeight.value) / 2;
    })
})


function updateValues() {
    let value = `${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px`
    box.style.borderRadius = value;
};

arrOfInputs.forEach((inp) => {
    inp.addEventListener("input", (e) => {
        updateValues()
        inp.dataset.v = inp.value;
        output.value = `box-shadow: ${topLeft.value}px ${topRight.value}px ${bottomRight.value}px ${bottomLeft.value}px;`;
    });
});
