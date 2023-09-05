const imgs = Array.from(document.images);
const lis = document.querySelectorAll("ul li");

lis.forEach(li => {
    li.addEventListener("click", (e) => {
        lis.forEach(l => {
            l.classList.remove("active")
        });
        li.classList.add("active");

        imgs.forEach(im => {
            im.style.display = "none";
        });
        document.querySelectorAll(li.dataset.cat).forEach(i => {
            i.style.display = "block"
        })
    });
});