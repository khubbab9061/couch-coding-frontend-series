const listItems = document.querySelectorAll("#list li");
let currentIndex = 0;

function selectItem(index) {
  // Remove the "selected" class from all items
  listItems.forEach((item) => item.classList.remove("selected"));

  // Add the "selected" class to the item at the given index
  listItems[index].classList.add("selected");
}

selectItem(currentIndex); // Select the first item by default

const listContainer = document.getElementById("list-container");
let angle = 0;

function moveItems() {
  // Calculate the angle between items
  const itemAngle = (2 * Math.PI) / listItems.length;

  // Update the angle of the list container
  angle += itemAngle;
  listContainer.style.transform = `rotate(${angle}rad)`;

  // Update the selected item
  currentIndex = (currentIndex + 1) % listItems.length;
  selectItem(currentIndex);
}

const moveButton = document.getElementById("move-button");
moveButton.addEventListener("click", moveItems);
