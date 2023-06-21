const box = document.querySelector('.box');

const x = document.querySelector('.offset-x');
const y = document.querySelector('.offset-y');
const blurRadius = document.querySelector('.blur-radius');
const blurSpread = document.querySelector('.blur-spread');
const color = document.querySelector('.color');


const resetButton = document.querySelector(".reset")

const codeInp = document.querySelector(".the-code")


// غطبق التحت ومهمتها انها كتشد قيمة كل رينج وتحطو فبلاصتو function ال

function updateBoxShadowValue(e) {
    let v = `${x.value}px ${y.value}px ${blurRadius.value}px ${blurSpread.value}px ${color.value}`;

    box.style.boxShadow = v;

    // هذا كيحدث قيمة بلاصة الكود بنفس القيم لي ختاريتي فحالة بغيتي تكوبي الكود
    codeInp.value = `box-shadow: ${v};`;

}


// data attr و كيحدث قيمة ال function كل رينج ملي يتبدا فتغير القيمة ديالو كيطبق ال

[x, y, blurRadius, blurSpread, color].forEach((e) => {
    e.addEventListener("input", () => {
        updateBoxShadowValue()
        e.setAttribute("data-v", `${e.value}`)
    })
});


// غيدير لوب على غا لي رينج reset ملي غتكليكي على 
// data attr غيرد لقيمة للون لكحل وتا قيمة ال color input الا كان
// 0 غيرد قيمة الرينج و الداتا ل inp اما الا كان رينج

resetButton.onclick = () => {
    [x, y, blurRadius, blurSpread, color].forEach((e) => {
        if (e.className == "color") {
            e.value = "#000000";
            e.setAttribute("data-v", `#000000`)
        } else {
            e.value = 0;
            e.setAttribute("data-v", "0")
        }
    });
    box.style.boxShadow = "";
    codeInp.value = "box-Shadow: 0px 0px 0px 0px #000000;";
}