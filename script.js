function initializeGrid() {
    const sketchGrid = document.querySelector(".flexColumn, sketchContainer");
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

    const nodeList = document.querySelectorAll("div .gridElement");

    nodeList.forEach((node) => {
        node.addEventListener("mouseover", () => {
            node.classList.toggle("gridElementHover")
        });
    })


}

initializeGrid();
