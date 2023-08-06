function initializeGrid(sizeX, sizeY) {
    const sketchGrid = document.querySelector(".flexColumn .sketchContainer");
    const gridRow = document.createElement('div');
    const gridElement = document.createElement('div');

    // gridRow.classList.toggle("flexColumn");
    gridElement.classList.toggle("gridElement");

    for (let i = 0; i < sizeY; ++i)
    {
        gridRow.appendChild(gridElement.cloneNode(true));
    }
    for (let i = 0; i < sizeX; ++i)
    {
        sketchGrid.appendChild(gridRow.cloneNode(true));
    }

    const nodeList = document.querySelectorAll("div .gridElement");

    nodeList.forEach((node) => {
        node.addEventListener("mouseover", () => {
            node.classList.add("gridElementHover")
        });

        node.addEventListener("mouseout", () => {
            node.classList.remove("gridElementHover");
        });
    })
}

function promptSize() {
    let sizeX = prompt("Specify desired size of X-axis (Limit: 100)");
    while (sizeX < 1 || sizeX > 100)
    {
        sizeX = prompt("Invalid input, please try again.");
    }

    let sizeY = prompt("Specify desired size of Y-axis (Limit: 100)");
    while (sizeY < 1 || sizeY > 100)
    {
        sizeY = prompt("Invalid input, please try again.");
    }

    clearGrid();
    initializeGrid(sizeX, sizeY);


}

function clearGrid() {
    const gridToDelete = document.querySelector(".sketchContainer");
    while (gridToDelete.firstChild)
    {
        gridToDelete.removeChild(gridToDelete.firstChild);
    }
}
