const notificationCnt = document.querySelector(".notifications-wrapper");
const buttons = document.querySelectorAll(".notiButton");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        showToast(button.dataset.status);
    })
})
function showToast(whichOne) {
    let notyContainer = document.createElement("div");
    notyContainer.className = "noty"
    let icon = document.createElement("div");
    icon.className = "icon";
    let msg = document.createElement("div");
    msg.className = "msg";
    let close = document.createElement("div");
    close.className = "closeNotification";
    let timeout = document.createElement("div");
    timeout.className = "timeout";
    if (whichOne == "success") {
        icon.innerHTML = `<i class="fa-solid fa-circle-check"></i>`;
        msg.innerHTML = `Successfully submited`;
        close.innerHTML = `<i class="fa-solid fa-xmark closeButton"></i>`;
        icon.style.color = "green";
        timeout.style.backgroundColor = "green";
    } else if (whichOne == "error") {
        icon.innerHTML = `<i class="fa-solid fa-circle-xmark"></i>`;
        msg.innerHTML = `Something went wrong`;
        close.innerHTML = `<i class="fa-solid fa-xmark closeButton"></i>`;
        icon.style.color = "red";
        timeout.style.backgroundColor = "red";
    } else {
        icon.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i>`;
        msg.innerHTML = `invalid input, check again`;
        close.innerHTML = `<i class="fa-solid fa-xmark closeButton"></i>`;
        icon.style.color = "orange";
        timeout.style.backgroundColor = "orange";
    }
    notyContainer.appendChild(icon)
    notyContainer.appendChild(msg)
    notyContainer.appendChild(close)
    notyContainer.appendChild(timeout)
    notificationCnt.appendChild(notyContainer)
    setTimeout(() => {
        notyContainer.style.transform = "translateX(calc(0% - 10px))";
        setTimeout(() => {
            notyContainer.remove()
        }, 8000)
    }, 0)
};

document.documentElement.addEventListener("click", ({ target }) => {
    if (target.classList.contains("closeButton")) {
        target.closest(".noty").remove()
    }
})