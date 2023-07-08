/*
    - Random Background Color
*/

const generateBtn = document.querySelector(".generate");
const likBtn = document.querySelector(".like-btn");
const tbody = document.getElementById("mainThing");

const colorOutput = document.querySelector(".a-color");

const deleteAll = document.querySelector(".delete")

generateBtn.addEventListener("click", () => {
    generateAndSet();
})

function generateAndSet() {
    let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F',];

    let result = [];

    for (let i = 0; i < 6; i++) {
        result.push(
            hexArray[Math.floor(Math.random() * hexArray.length)]
        );
    }

    let finalColor = `#${result.join("")}`

    document.querySelector(".a-color").value = finalColor

    document.body.style.backgroundColor = finalColor;
}

let counter = 0;

likBtn.addEventListener("click", () => {
    if (tbody.querySelector(`.A-${colorOutput.value.slice(1)}`) == null) {
        const newTrEl = document.createElement("tr");
        newTrEl.innerHTML = `<td>${++counter}</td>
            <td>${colorOutput.value}</td>
            <td><span 
                class="sample" 
                style=" 
                        width: 150px; 
                        height: 60px; 
                        background-color: ${colorOutput.value}; 
                        display: block; 
                        margin: 0 auto;">
                </span>
            </td>`;
        newTrEl.classList.add(`A-${colorOutput.value.slice(1)}`);
        tbody.append(newTrEl)
    }
});


deleteAll.addEventListener("click", () => {
    let confirmation = confirm("Are you sure?");
    if (confirmation) {
        tbody.innerHTML = ""
    }
})