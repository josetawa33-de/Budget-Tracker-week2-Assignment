// SpendWise - JavaScript Foundation

// Variables
let budget = 0;
let expenses = 0;
let balance = 0;

// Function to calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Function to collect user input
function startBudget() {

    budget = Number(prompt("Enter your total budget:"));
    expenses = Number(prompt("Enter your total expenses:"));

    // Calculate remaining balance
    balance = calculateBalance(budget, expenses);

    // Display results on the webpage
    document.getElementById("budget").textContent = budget;
    document.getElementById("expenses").textContent = expenses;
    document.getElementById("balance").textContent = balance;

    // Display results in the console
    console.log("SpendWise Budget Report");
    console.log("Budget: " + budget);
    console.log("Expenses: " + expenses);
    console.log("Remaining Balance: " + balance);
}

// Initial console message
console.log("SpendWise JavaScript loaded successfully.");