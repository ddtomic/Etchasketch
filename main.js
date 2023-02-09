document.body.onload = createGrid;

function createGrid() {
    //Referencing container Div from html
    const container = document.querySelector('#container');

    //creating grid items and assigning them the 'grids' class
    for (let i = 0; i<256; i++){
    const gridItem = document.createElement("div");
    gridItem.classList.add('grids');
    container.appendChild(gridItem);
    }   
}






