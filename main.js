var removeButton = document.getElementById('button');
var closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', handleCloseClick)

function handleCloseClick() {
  removeButton.style.display = "none";
}

var clickDashboard = document.querySelector('.dashboard');
var lightTransactions = document.querySelector('.transactions');

lightTransactions.addEventListener('click', handleIcon)

function handleIcon() {
    clickDashboard.classList.remove("blue-border");
    lightTransactions.classList.add("blue-border");
}


