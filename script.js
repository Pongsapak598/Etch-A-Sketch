let userNumber = '';

function getUserNum() {
    userNumber = document.getElementById("box").value;
}

let divSize = '';

function calDivSize() {
    divSize = 650/userNumber;
}

const container = document.querySelector("#container")

function generateGrid() {

    for (let i = 0 ; i < userNumber * userNumber ; i++) {
        const gridDiv = document.createElement("div");

        gridDiv.style.width = `${divSize}px`;
        gridDiv.style.height = `${divSize}px`;
        gridDiv.style.outline = "1px solid black";
        gridDiv.style.cssFloat = "left";

        container.appendChild(gridDiv)
    }
}

function removeAllChilds(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}