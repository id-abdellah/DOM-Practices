const textArea = document.querySelector("#input");
const button = document.querySelector(".wrapper button");

const tableCode = document.querySelector("table tbody");

button.addEventListener("click", (e) => {

    let QRCodeApi = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=";

    let userInputValue = textArea.value;

    let tableRow = document.createElement("tr");
    tableRow.innerHTML = `
        <td>${userInputValue}</td>
        <td><img src="${QRCodeApi + userInputValue}"></td>
    `;
    tableCode.appendChild(tableRow)
})