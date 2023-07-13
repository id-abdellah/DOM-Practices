const outputField = document.querySelector("input");
const letters = document.querySelectorAll(".letter");
const controlesButtons = document.querySelectorAll(".controle");

const numbersRow = document.querySelector(".numbers-row");


letters.forEach((letter) => {
    letter.addEventListener("click", () => {
        outputField.value += letter.textContent
    })
});

numbersRow.querySelectorAll("span").forEach((num) => {
    num.addEventListener("click", () => {
        outputField.value += num.textContent
    })
});



controlesButtons.forEach((element) => {
    element.addEventListener("click", (e) => {

        if (element.classList.contains("delete")) {
            let x = outputField.value.slice(0, -1)
            outputField.value = x;

        } else if (element.classList.contains("space")) {
            outputField.value += " ";

        } else if (element.classList.contains("arrow-up")) {
            element.classList.toggle("arrow-up-pressed")
            let lowerCase = "qwertyuiopasdfghjklzxcvbnm";
            if (element.classList.contains("arrow-up-pressed")) {
                for (let i = 0; i < letters.length; i++) {
                    letters[i].textContent = lowerCase[i].toUpperCase();
                }
            } else {
                for (let i = 0; i < letters.length; i++) {
                    letters[i].textContent = lowerCase[i].toLowerCase();
                }
            }

        } else if (element.classList.contains("numbers")) {
            element.classList.toggle("show-numbers");
            if (element.classList.contains("show-numbers")) {
                numbersRow.style.display = "flex";
            } else {
                numbersRow.style.display = "none"
            }
        }
    })
})