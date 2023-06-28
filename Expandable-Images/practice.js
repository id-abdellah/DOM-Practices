const imges = document.querySelectorAll(".img")

imges.forEach((element) => {
    element.addEventListener("click", (e) => {
        imges.forEach((el) => {
            el.classList.remove("active")
        })
        e.target.classList.add("active");
    })
})