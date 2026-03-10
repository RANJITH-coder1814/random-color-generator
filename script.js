function generateColor(){

let letters = "0123456789ABCDEF";
let color = "#";

for(let i = 0; i < 6; i++){
color += letters[Math.floor(Math.random() * 16)];
}

document.body.style.background = color;

document.getElementById("colorCode").innerText = color;

}

function copyColor(){

let color = document.getElementById("colorCode").innerText;

navigator.clipboard.writeText(color);

alert("Color copied: " + color);
}
