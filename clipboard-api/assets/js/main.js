const copyInput = document.getElementById("copyInput");
const copyButton = document.getElementById("copyButton");
const pastInput = document.getElementById("pastInput");
const pastButton = document.getElementById("pastButton");

copyButton.addEventListener("click", async () => {
    await navigator.clipboard.writeText(copyInput.value);
});

pastButton.addEventListener("click", async () => {
    let reade = await navigator.clipboard.readText();
    pastInput.value = reade;
})