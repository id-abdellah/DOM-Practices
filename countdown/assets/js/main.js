document.querySelectorAll(".countdown span:nth-child(odd)").forEach(span => {
    span.setAttribute("data-sm", span.className.slice(0, 1).toUpperCase() + span.className.slice(1))
})

let countdownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counting = setInterval(() => {

    let dateNow = new Date().getTime();

    let dateDifference = countdownDate - dateNow;

    let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
    let hours = Math.floor(dateDifference % ((1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor(dateDifference % ((1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor(dateDifference % ((1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
    document.querySelector(".seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;

    if (dateDifference < 0) {
        clearIntervale(counting)
    }

}, 1000);
