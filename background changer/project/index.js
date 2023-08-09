
const button = document.querySelector("button");
const body = document.querySelector("body");


function generateRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}


function changeBackground() {
    const randomColor = generateRandomColor();
    body.style.backgroundColor = randomColor;
}


body.style.backgroundColor = "purple";


button.addEventListener("click", changeBackground);

