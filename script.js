const canvas = document.querySelector('.canvas');
let gridSize = document.querySelector('input');
let resetBtn = document.querySelector('.reset');
let applyBtn = document.querySelector('.apply');
let sizeVal = document.querySelector('.size')
let orgSize = 8;
createGrid(orgSize);

function createDiv(size) {
    const div = document.createElement('div');
    div.classList.add('grid');
    div.style.width = `${size}px`;
    div.style.length = `${size}px`;
    return div;
};

function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        for (let j = 0; j < gridSize; j++) {
            canvas.appendChild(createDiv(canvas.clientWidth / gridSize));
        };
    };
};

function reset() {
    while (canvas.firstChild) {
        canvas.removeChild(canvas.lastChild);
    };
    createGrid(orgSize);
}

applyBtn.addEventListener('click', () => reset())
resetBtn.addEventListener('click', reset)
gridSize.addEventListener('input', function(e) {
    orgSize = e.target.value;
    sizeVal.textContent = `${orgSize}x${orgSize}`;
})

canvas.addEventListener('mouseover', function (e) {
    if (e.target.matches('.grid')) {
        e.target.classList.add('activated');
    }
});
createGrid();