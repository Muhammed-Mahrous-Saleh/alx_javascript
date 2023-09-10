#!/usr/bin/node

function changeMode(size, weight, transform, background, color) {
    const myStyles = `
    font-size: ` + size + ";" +
        `font-weight: ` + weight + ";" +
        `text-transform: ` + transform + ";" +
        `background-color: ` + background + ";" +
        `color: ` + color + ";"

    const element = document.querySelector('body');

    element.style.cssText = myStyles;
}

function main() {
    const spooky = () => changeMode(9, "bold", "uppercase", "pink", "green");
    const darkMode = () => changeMode(12, "bold", "capitalize", "black", "white");
    const screamMode = () => changeMode(12, "normal", "lowercase", "white", "black");

    var par = document.createElement("p");
    par.innerHTML = "Welcome Holberton!";
    document.body.appendChild(par);
    var btnsp = document.createElement("button");
    btnsp.addEventListener("click", spooky)
    btnsp.innerText = "Spooky"
    var btnda = document.createElement("button");
    btnda.addEventListener("click", darkMode)
    btnda.innerText = "Dark Mode"
    var btnsc = document.createElement("button");
    btnsc.addEventListener("click", screamMode)
    btnsc.innerText = "Scream Mode"
    document.body.appendChild(btnsp);
    document.body.appendChild(btnda);
    document.body.appendChild(btnsc);
}

