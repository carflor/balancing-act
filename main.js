// cache dom
var removeButton = document.getElementById('button');
var closeButton = document.querySelector('.close-button');
var clickTransactions = document.querySelector('.transactions');
var clickProfile = document.querySelector('.profile');
var clickDashboard = document.querySelector('.dashboard');
var mainOne = document.querySelector('.main-one')

// event handlers
function handleCloseClick() {    
  removeButton.style.display = "none";
}

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
    clickDashboard.classList.add('blue-border');
    clickTransactions.classList.remove('blue-border');
    clickProfile.classList.remove('blue-border');
}

function displayDashboard() {
  mainOne.innerHTML = 
  `
  <h1>Balancing Act</h1>
  <div id="button">
    <button class="welcome-button"> 
      Welcome, Oscar!
    </button>
    <button class="close-button">
      X
    </button>
  </div>
  <div class="summary">
  <section class="mainInfo income">
    <p>Income</p>
    <section>$2,119.12</section>
  </section>
  <section class="mainInfo expenses">
    <p>Expenses</p>
    <section>$420.54</section>
  </section>
  <section class="mainInfo credit">
    <p>Credit Score</p>
    <section>673</section>
  </section>
  </div>
  <h2>Accounts
    <button class="manage-button">
    Manage Accounts
    </button>
  </h2>
  <div class="acct-summary">
  <section class="bottom checking"> 
    <img src="assets/images/checking.svg" alt="checkings-icon" title="Checkings Icon." />
    <span>Wells Fargo</span>
    <span class="last-span">Checking</span>
  </section>
  <section class="bottom savings">   
    <img src="assets/images/savings.svg" alt="savings-icon" title="Savings Icon." /> 
    <span>Wells Fargo</span>
    <span class="last-span">Savings</span>
  </section>
  <section class="bottom credit-card"> 
    <img src="assets/images/credit-card.svg" alt="creditcard-icon" title=" Credit Card Icon." />
    <span>Amazon Credit</span>
    <span class="last-span">Credit Card</span>   
  </section> 
  <section class="bottom credit-cardtwo"> 
    <img src="assets/images/credit-card.svg" alt="creditcard-icon" title=" Credit Card Icon." />
    <span>Southwest Credit</span>
    <span class="last-span">Credit Card</span>
  </section>
  </div> 
  <div class="aside">
  <h2 class="otherh2">Recent Transactions</h2>
  <button class="right-tab">New Transaction</button>
  <section class="banking-table">
  <table>
  <tr>
    <th>Date</th>
    <th>Payee</th>
    <th>Inflow</th>
    <th>Outflow</th>
  <tr>
    <td>Oct 25, 2019</td>
    <td>Target</td>
    <td>-</td>
    <td>$82.35</td>
  </tr>
  <tr>
    <td>Oct 24, 2019</td>
    <td>Express</td>
    <td>-</td>
    <td>$212.24</td>
  </tr>
  <tr>
    <td>Oct 22, 2019</td>
    <td>Paycheck</td>
    <td>$1319.12</td>
    <td>-</td>
    </tr>
    <tr>
      <td>Oct 21, 2019</td>
      <td>Trader Joe's</td>
      <td>-</td>
      <td>$54.92</td>
    </tr>
    <tr>
      <td>Oct 20, 2019</td>
      <td>Shell</td>
      <td>-</td>
      <td>$46.23</td>
    </tr>
    <tr>
      <td>Oct 19, 2019</td>
      <td>Rent</td>
      <td>$800.00</td>
      <td>-</td>
    </tr>
    <tr>
      <td>Oct 19, 2019</td>
      <td>Hapa Sushi</td>
      <td>-</td>
      <td>$13.97</td>
    </tr>
    <tr>
      <td>Oct 18, 2019</td>
      <td>Pig Train</td>
      <td>-</td>
      <td>$4.83</td>
    </tr>
    <tr>
      <td>Oct 18, 2019</td>
      <td>RTD</td>
      <td>-</td>
      <td>$6.00</td>
    </tr>
    </table>
  </section>
  </div>`

  closeButton = document.querySelector('.close-button');
  removeButton = document.getElementById('button');
  closeButton.addEventListener('click', handleCloseClick, {once: true})
}

function displayTransactions() {
  mainOne.innerHTML = `
  <section class="main-transactions">
  <h1 class="h1-transactions">Transactions</h1>
  <div class="transactions-buttons"> 
  <button class="all-button">ALL</button>
  <button class="inflow-button">INFLOW</button>
  <button class="outflow-button">OUTFLOW</button>
  </div> 
  
  <table class="full-transactions">
    <tr>
      <th>Date</th>
      <th>Account</th>
      <th>Payee</th>
      <th>Inflow</th>
      <th>Outflow</th>
    </tr>
    <tr>
      <td>10-25-19</td>
      <td>Credit Card</td>
      <td>Target</td>
      <td>-</td>
      <td>$82.35</td>
    </tr>
    <tr>
      <td>10-24-19</td>
      <td>Credit Card</td>
      <td>Express</td>
      <td>-</td>
      <td>$212.24</td>
    </tr>
    <tr>
      <td>10-22-19</td>
      <td>Checking</td>
      <td>Paycheck</td>
      <td>$1319.12</td>
      <td>-</td>
    </tr>
    <tr>
      <td>10-21-19</td>
      <td>Credit Card</td>
      <td>Trader Joe's</td>
      <td>-</td>
      <td>$54.92</td>
    </tr>
    <tr>
      <td>10-20-19</td>
      <td>Credit Card</td>
      <td>Shell</td>
      <td>-</td>
      <td>$46.23</td>
    </tr>
    <tr>
      <td>10-19-19</td>
      <td>Savings</td>
      <td>Rent</td>
      <td>$800.00</td>
      <td>-</td>
    </tr>
    <tr>
      <td>10-19-19</td>
      <td>Checking</td>
      <td>Hapa Sushi</td>
      <td>-</td>
      <td>$13.97</td>
    </tr>
    <tr>
      <td>10-18-19</td>
      <td>Credit Card</td>
      <td>PigTrain</td>
      <td>-</td>
      <td>$4.83</td>
    </tr>
    <tr>
      <td>10-18-19</td>
      <td>Checking</td>
      <td>RTD</td>
      <td>-</td>
      <td>$6.00</td>
    </tr>
    <tr>
      <td>10-24-19</td>
      <td>Checking</td>
      <td>Express</td>
      <td>-</td>
      <td>$212.24</td>
    </tr>
    <tr>
      <td>10-24-19</td>
      <td>Checking</td>
      <td>Express</td>
      <td>-</td>
      <td>$212.24</td>
    </tr> 
    <tr>
      <td>10-24-19</td>
      <td>Checking</td>
      <td>Express</td>
      <td>-</td>
      <td>$212.24</td>
    </tr> 
    <tr>
      <td>10-24-19</td>
      <td>Checking</td>
      <td>Express</td>
      <td>-</td>
      <td>$212.24</td>
    </tr> 
    <tr id="last-line-table">
      <td id="last-line-table">10-24-19</td>
      <td id="last-line-table">Checking</td>
      <td id="last-line-table">Express</td>
      <td id="last-line-table">-</td>
      <td id="last-line-table">$212.24</td>
    </tr>
  </table>
  <aside class="transactions-aside">
  <h2 class="new-transaction">New Transaction</h2>
  <section class="transactions-menu">
  <p>Type of Transaction:</p>
  <select class="options" name="type-of-transaction">
      <option value="expense">Expense</option>
      <option value="deposit">Deposit</option>
      <option value="transfer">Transfer</option>
  </select>
  <p>Category:</p>
  <select class="options" name="category"> 
      <option value="category">Category</option>
      <option value="responsible">Responsible</option>
      <option value="irresponsible">Irresponsible</option>
      <option value="well planned">Well Planned</option>
  </select>
  <p>Account from:</p>
  <select class="options" name="account-from">
      <option value="default">-Select One-</option>
      <option value="checking">Checking</option>
      <option value="credit-card">Credit Card</option>
      <option value="saving">Saving</option>
  </select>
  <p>Payee:</p>
  <input class="options" type="text" name="payee" />
  <p>Outflow:</p>
  <input class="options" type="text" name="outflow" />
  <p>Category:</p>
  <input class="options" type="text" name="category" />
  <button class="expense-button">Log Expense</button>
  </section>
  </aside>
  </section>`
}

function displayProfile() {
  mainOne.innerHTML = 
  `<main>
  <p>
  Currently Under Construction
  </p>
  </main>`
}

// event listeners
clickTransactions.addEventListener('click', handleIcon)
clickProfile.addEventListener('click', handleIcon2)
clickDashboard.addEventListener('click', handleIcon3)
closeButton.addEventListener('click', handleCloseClick, {once: true})
clickTransactions.addEventListener('click', displayTransactions)
clickProfile.addEventListener('click', displayProfile)
clickDashboard.addEventListener('click', displayDashboard)





// extra experiment

// var allButton = document.getElementsByClassName('all-button');
// var inflowButton = document.getElementsByClassName('inflow-button');
// var outflowButton = document.getElementsByClassName('outflow-button');

// function handleAllButton() {
//   clickAllButton.classList.remove("coloring");
//   clickInflowButton.classList.add("coloring");
//   clickOutflowButton.classList.remove("coloring");
// }

// clickAllButton.addEventListener('click', handleAllButton)
// clickInflowButton.addEventListener('click', handleInflowButton)
// clickOutflowButton.addEventListener('click', handleOutflowButton)

