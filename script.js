let container = document.querySelector("#container");
let size = parseInt(prompt("Enter Size of the grid"));

container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
container.style.gridTemplateRows = `repeat(${size}, 1fr)`;;

for(let i = 0; i < size*size; i++){
    let block = document.createElement("div");
    block.className = "block";
    container.appendChild(block);
}

let reset_but = document.querySelector("button");
let blocks = document.querySelectorAll(".block");
InitBlocksCounter();

reset_but.onclick = reset;



blocks.forEach((block) => {
    block.addEventListener("mouseover" , (e) =>
        {
            controlOpacity(block);
            changeToRandomColor(block);
        }
    )
})


function changeToRandomColor(element){
    let r = Math.random() * 256;
    let g = Math.random() * 256;
    let b = Math.random() * 256;
    console.log(element.counter);
    let opacity = element.counter * 0.1;    
    element.style.background = `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function reset() {
    blocks.forEach((block) => {
        block.style.background = "black";
        block.counter = 0;
    })
}

function InitBlocksCounter() {
    blocks.forEach((block) => {
        block["counter"] = 0;
    })
}

function controlOpacity(block) {
    block.counter += 1;
    if(block.counter >= 10) block.counter = 10;
}