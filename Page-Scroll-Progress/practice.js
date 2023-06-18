const scrollerProgress = document.querySelector(".scroller");

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;


window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    // The scrollTop property sets or returns the number of pixels an element's content is scrolled vertically.
    scrollerProgress.style.width = `${(scrollTop / height) * 100}%`;
})

// ReadOnly
console.log(document.documentElement.scrollHeight); // The entire height of document
console.log(document.documentElement.clientHeight); // The height of visible content only