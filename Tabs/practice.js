const lists = document.querySelectorAll("ul li");
const divs = document.querySelectorAll(".contents div");

lists.forEach((element) => {
    element.addEventListener("click", (e) => {
        lists.forEach(el => {
            el.classList.remove("active")
        });
        element.classList.add("active");

        divs.forEach(div => {
            div.style.display = "none"
            // document.querySelector(element.dataset.order).style.backgroundColor = "red"
        });
        document.querySelector(`.${element.dataset.order}`).style.display = "block";
    });
});