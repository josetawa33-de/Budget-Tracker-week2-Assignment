// SpendWise - JavaScript Foundation

// Variables
let budget = 0;
let expenses = 0;
let balance = 0;

// Function to calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Function to collect and process budget information
function startBudget() {

    // Get budget from user
    let budgetInput = prompt("Enter your total budget:");

    // Check budget input
    if (budgetInput === null || budgetInput.trim() === "" || isNaN(Number(budgetInput))) {
        alert("Please enter a valid budget amount.");
        return;
    }

    // Convert budget to number
    budget = Number(budgetInput);

    // Get expenses from user
    let expensesInput = prompt("Enter your total expenses:");

    // Check expenses input
    if (expensesInput === null || expensesInput.trim() === "" || isNaN(Number(expensesInput))) {
        alert("Please enter a valid expense amount.");
        return;
    }

    // Convert expenses to number
    expenses = Number(expensesInput);

    // Calculate balance
    balance = calculateBalance(budget, expenses);

    // Display results on webpage
    document.getElementById("budget").textContent = budget;
    document.getElementById("expenses").textContent = expenses;
    document.getElementById("balance").textContent = balance;

    // Display results in console
    console.log("SpendWise Budget Report");
    console.log("-----------------------");
    console.log("Budget: " + budget);
    console.log("Expenses: " + expenses);
    console.log("Remaining Balance: " + balance);
}

// Confirm JavaScript is working
console.log("SpendWise JavaScript loaded successfully.");