// boxes Creation

const boxsContainer = document.querySelectorAll(".boxs-container .item");
const input = document.getElementById("inp");
const button = document.getElementById("btn");

let currentDragging = null;

button.addEventListener("click", e => {
    if (input.value == "") return
    const p = document.createElement("p");
    p.textContent = input.value;
    p.draggable = "true";
    boxsContainer[0].appendChild(p);
    input.value = "";
    input.focus();

    // ---------
    drageItem()
})

input.ondrag

function drageItem() {
    let dragableItems = document.querySelectorAll(".boxs-container .item p");
    dragableItems.forEach(item => {
        item.addEventListener("dragstart", e => {
            item.style.opacity = ".6";
            currentDragging = item;
        })

        item.addEventListener("dragend", e => {
            item.style.opacity = "1";
            currentDragging = null;
        })

        boxsContainer.forEach(box => {
            box.addEventListener("dragover", e => {
                e.preventDefault()
                box.style.opacity = ".7"
            })

            box.addEventListener("dragleave", e => {
                box.style.opacity = "1"
            })

            box.addEventListener("drop", e => {
                box.appendChild(currentDragging)
                box.style.opacity = "1"
            })
        })
    })

}