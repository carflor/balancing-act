var removeButton = document.getElementById('button');
var closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', handleCloseClick)

function handleCloseClick() {
    console.log("it works");
  removeButton.style.display = "none";
}
