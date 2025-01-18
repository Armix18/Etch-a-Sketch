let container = document.querySelector("#container");
container.classList.toggle('content');

let popup = document.querySelector("#popup");

popup.addEventListener('click',(e) => {

    let squares = parseInt(prompt('Enter the number of grid (nxn)', ));

    if(squares > 100){
        alert('Enter a number less than 100');
    } else {
        container.textContent = '';

        let squaresDouble = Math.pow(squares, 2);

        drawGrid(squares, squaresDouble);


    }
});

setInterval(drawGrid, 1000);


function drawGrid(squares, squaresDouble){
    for (let i = 0; i < squaresDouble; i++) {

        let box = document.createElement('div');

        container.appendChild(box);
        box.classList.add('box-grid');
        
        let gapCalculation = (squares-1)*2;
        box.style.flexBasis = (700 - gapCalculation)/squares + 'px';

        let classOpacity = 0;
        box.style.opacity = 0;


        //let j = 0;
            box.addEventListener('mouseenter',(e) => {
                //box.style.backgroundColor = 'rgba(110, 194, 166, 0.822)';
                if(classOpacity < 1) {
                classOpacity = classOpacity+0.1;
                box.style.opacity = classOpacity;
                console.log('opacity ' + classOpacity);

                }
            });
            //j++;
        
    }
}


