let container = document.querySelector("#container");
container.classList.toggle('content');
//console.log(container);

let popup = document.querySelector("#popup");

//let box;

popup.addEventListener('click',(e) => {
    container.textContent = '';

    let squares = parseInt(prompt('Enter the number of squares', ));
    let squaresDouble = Math.pow(squares, 2);

    for (let i = 0; i < squaresDouble; i++) {
        let box = document.createElement('div');
        container.appendChild(box);
        box.classList.add('box-grid');
        //box.textContent = 'a';
        //box.style.padding = (700/(squares*2))+ 'px';
        let gapCalculation = (squares-1)*3;
        box.style.flexBasis = (700 - gapCalculation)/squares + 'px';
        //console.log(box.style.padding);

        box.addEventListener('mouseleave',(e) => {
            box.style.backgroundColor = 'rgba(110, 194, 166, 0.822)';
        });
    }
});



