const previouseOperande = document.querySelector(".previous-operand");
const currentOperande = document.querySelector(".current-operand");

const numbers = document.querySelectorAll(".number");
const equals = document.querySelector(".equales")
const arOp = document.querySelectorAll(".ao");

const allClear = document.querySelector(".ac");
const del = document.querySelector(".de");

numbers.forEach(num => {
    num.addEventListener("click", (e) => {
        if (e.target.textContent == "." && currentOperande.textContent.includes(".")) return
        currentOperande.textContent += num.dataset.content
    });
});

// let firstTime = true;

arOp.forEach(ao => {
    ao.addEventListener("click", () => {
        previouseOperande.textContent = currentOperande.textContent + ao.dataset.content;
        previouseOperande.style.bottom = "20px";
        previouseOperande.style.color = "gray";
        currentOperande.textContent = "";
    });
});

equals.addEventListener("click", () => {
    let previousOp = Number(previouseOperande.textContent.slice(0, -1))
    let currentOp = Number(currentOperande.textContent);
    let theOp = previouseOperande.textContent.slice(-1);

    if (theOp === "-") {
        currentOperande.textContent = previousOp - currentOp
    } else if (theOp === "+") {
        currentOperande.textContent = previousOp + currentOp
    } else if (theOp === "x") {
        currentOperande.textContent = previousOp * currentOp
    } else if (theOp === "/") {
        currentOperande.textContent = previousOp / currentOp
    }
    previouseOperande.textContent = "";
});

allClear.addEventListener("click", () => {
    previouseOperande.textContent = "";
    currentOperande.textContent = "";
});

del.addEventListener("click", () => {
    currentOperande.textContent = currentOperande.textContent.split("").slice(0, -1).join("");
})