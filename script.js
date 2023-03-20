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
        gridDiv.style.outline = "2px solid black"
        gridDiv.style.cssFloat = "left";
        gridDiv.style.boxSizing = "border-box";
        gridDiv.style.background = 'white'
        gridDiv.classList.add("grid-div");

        container.appendChild(gridDiv)
    }
}

let colorCount = '0';

function colorGrid() {
    function randomColor() {
        const random = Math.floor(Math.random()*16777215).toString(16);
        if (random == 'FFFFFF' || random == '000000') {
            random = '123456';
            return random
        } else return random
    }

    const grids = document.querySelectorAll(".grid-div");
    grids.forEach(grid => {
        grid.addEventListener('mouseover', function() {
            if (colorCount%10 === 0) {
                if (this.style.background == 'white')
                    this.style.background = 'black';
                ++colorCount;
            } else if (this.style.background == 'white') {
                this.style.background = `#${randomColor()}`;
                ++colorCount;
            }
        })
    })
}

function removeAllChilds(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    colorCount = '0';
}