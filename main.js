document.body.onload = createGrid;

let userColor = "black";
let activeButton = null;
let gridSize = 16;

function createGrid() {

    //Referencing container Div from html
    const container = document.querySelector('#container');

    //creating grid items and assigning them the 'grids' class
    for (let i = 0; i < gridSize * gridSize; i++){
        const gridItem = document.createElement("div");

        gridItem.style.width = `calc(400px / ${gridSize} - 2 * 1px)`;
        gridItem.style.height = `calc(400px / ${gridSize} - 2 * 1px)`;
        //changes colors of grid when mouse is hovered over
        gridItem.addEventListener("mouseover", ()=>{
            gridItem.style.backgroundColor = userColor;
        });

        //adds grids to DOM tree and assigns them class of 'grids'.
        gridItem.classList.add('grids');
        container.appendChild(gridItem);
    } 
}

//clear grid button
function clearGrid() {
    const gridItems = document.querySelectorAll(".grids");
    gridItems.forEach(item => item.style.backgroundColor = "");
}

//function for color change buttons
function selectButton(button, color) {
    userColor = color;

    const buttonBack = document.querySelector(button);
    buttonBack.classList.add("selected-button");

    if (activeButton && activeButton !== buttonBack) {
        activeButton.classList.remove("selected-button");
    }
    activeButton = buttonBack;
}

function blueButton(){
    selectButton("#blue-button", "blue");
}

function redButton(){
    selectButton("#red-button", "red");
}

function blackButton(){
    selectButton("#black-button", "black");
}


const sizeInput = document.querySelector('#sizeInput');
sizeInput.addEventListener('change', () => {
    gridSize = sizeInput.value;
    const container = document.querySelector('#container');

    if (gridSize>0 && gridSize <=100){
    container.innerHTML = "";
    createGrid();
    }
});


//selects black by default
selectButton("#black-button", "black");
