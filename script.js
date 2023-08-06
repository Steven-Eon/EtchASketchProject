function initializeGrid() {
    const sketchGrid = document.querySelector(".flexColumn, sketchContainer");
    console.log(sketchGrid);
    const gridRow = document.createElement('div');
    const gridElement = document.createElement('div');

    gridRow.classList.toggle("flexRow");
    gridElement.classList.toggle("gridElement");

    for (let i = 0; i < 16; ++i)
    {
        gridRow.appendChild(gridElement.cloneNode(true));
    }
    for (let i = 0; i < 16; ++i)
    {
        sketchGrid.appendChild(gridRow.cloneNode(true));
    }
}

initializeGrid();