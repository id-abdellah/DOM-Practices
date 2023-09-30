const userInput = document.querySelector("#dateInput");
const calculateButton = document.querySelector(".inps button");
const userFinallAge = document.querySelector(".user-age");


calculateButton.addEventListener("click", (e) => {
    let birthday = new Date(userInput.value);

    let d1 = birthday.getDate();
    let m1 = birthday.getMonth() + 1;
    let y1 = birthday.getFullYear();

    let todyDate = new Date();

    let d2 = todyDate.getDate();
    let m2 = todyDate.getMonth() + 1;
    let y2 = todyDate.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1

    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m2 = m2 - 1;
        d3 = (d2 + (new Date(y1, m1, 0).getDate())) - d1;
    }

    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = (m2 + 12) - m1;
    }


    userFinallAge.innerHTML = `Your age is ${y3} years, ${m3} months and ${d3} days.`;
})
