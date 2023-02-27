const heading = document.getElementById("heading");
const rotateBtn = document.getElementById("rotate-btn");

let rotation = 0;

rotateBtn.addEventListener("click", () =>{
    rotation += 90;
    heading.style.transform = 'rotate(${rotation}deg)';
});