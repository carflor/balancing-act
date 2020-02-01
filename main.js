var removeButton = document.getElementById('button');
var closeButton = document.querySelector('.close-button');

closeButton.addEventListener('click', handleCloseClick)

function handleCloseClick() {
  removeButton.style.display = "none";
}

var clickDashboard = document.querySelector('.dashboard');
var clickTransactions = document.querySelector('.transactions');
var clickProfile = document.querySelector('.profile');

// var lightTransactions = document.querySelector('.transactions');

clickTransactions.addEventListener('click', handleIcon)
clickProfile.addEventListener('click', handleIcon2)
clickDashboard.addEventListener('click', handleIcon3)


function handleIcon() {
    clickDashboard.classList.remove("blue-border");
    clickTransactions.classList.add("blue-border");
    clickProfile.classList.remove('blue-border');
}

function handleIcon2() {
    clickDashboard.classList.remove("blue-border");
    clickTransactions.classList.remove("blue-border");
    clickProfile.classList.add('blue-border');
}

function handleIcon3() {
    clickDashboard.classList.add("blue-border");
    clickTransactions.classList.remove("blue-border");
    clickProfile.classList.remove('blue-border');
}


