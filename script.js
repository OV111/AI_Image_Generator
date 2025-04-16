const darkModeBtn = document.getElementById("darkmode");
const generateBtn = document.getElementById("generateButton");

const selectModel = document.getElementById("selectModel");
const imageCount = document.getElementById("imageCount");
const aspectRatio = document.getElementById("aspectRatio");


darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");

    console.log("works")
})