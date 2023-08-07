function initializeGrid(sizeX, sizeY) {
    const sketchGrid = document.querySelector(".flexColumn .sketchContainer");
    const gridRow = document.createElement('div');
    const gridElement = document.createElement('div');

    // gridRow.classList.toggle("flexColumn");
    gridElement.classList.toggle("gridElement");
    gridRow.classList.toggle("gridRowContainer");

    for (let i = 0; i < sizeY; ++i)
    {
        gridRow.appendChild(gridElement.cloneNode(true));
    }
    for (let i = 0; i < sizeX; ++i)
    {
        sketchGrid.appendChild(gridRow.cloneNode(true));
    }

    const nodeList = document.querySelectorAll("div .gridRowContainer");

    nodeList.forEach((node) => {
        node.addEventListener("mouseover", (event) => {
            console.log(event.buttons);
            if (event.buttons === 1)
            {
                event.target.classList.add("gridElementHover");
            }   
        });
    })
}

function promptSize() {
    let size = prompt("Specify desired size of grid. (Limit: 100 (100x100))");
    while (size < 1 || size > 100)
    {
        size = prompt("Invalid input, please try again.");
    }

    clearGrid();
    initializeGrid(size, size);


}

function clearGrid() {
    const gridToDelete = document.querySelector(".sketchContainer");
    while (gridToDelete.firstChild)
    {
        gridToDelete.removeChild(gridToDelete.firstChild);
    }
}
