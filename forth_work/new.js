var circle = document.getElementsByClassName("circle");
var upbtn = document.getElementsByClassName("upbtn");
var downbtn = document.getElementsByClassName("downbtn");

var rotateValue = circle.style.transform;
var rotateSum;

upbtn.onclick = function()
{
    rotateSum = rotateValue + "rotate(-90deg)";
    circle.style.transform = rotateSum;
    rotateValue = rotateSum;
}