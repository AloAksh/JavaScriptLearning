// let redBox = document.getElementById('red');
// let yellowBox = document.getElementById('yellow');
// let greenBox = document.getElementById('green');

let resetButton = document.getElementById('reset');

const squares = document.querySelectorAll('.colours');

resetButton.onclick = () => {
    for (const key of squares) {
        key.innerHTML = '<h1>0</h1>';
    }
}

squares.forEach(square => {
    square.onclick = () => {
        let count = Number(square.innerText)+1;
        square.innerHTML = `<h1>${count}</h1>`;
    }
})

