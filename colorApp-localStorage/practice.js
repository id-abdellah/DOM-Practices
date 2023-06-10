const lis = document.querySelectorAll("ul li");
const result = document.querySelector(".result")

if (window.localStorage["liColor"]) {
    // let result take the color of the last clicked li color => when refresh
    result.style.backgroundColor = window.localStorage.getItem("liColor")

    // let active class go to the last clicked li
    // [1]
    lis.forEach((li) => {
        li.classList.remove("active")
    })
    // [2]
    document.querySelector(`[data-color="${window.localStorage["liColor"]}"]`).classList.add("active")
}

lis.forEach((li) => {
    li.addEventListener("click", (e) => {
        // remove the active class for all other li's
        lis.forEach((l) => {
            l.classList.remove("active")
        })

        // add "active" class to current clicked li
        e.currentTarget.classList.add("active")

        // add the current color to the local storage
        window.localStorage.setItem("liColor", e.currentTarget.dataset.color)

        // let result take the color of active li
        result.style.backgroundColor = window.localStorage["liColor"]
    })
})