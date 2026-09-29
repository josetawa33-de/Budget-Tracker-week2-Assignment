// SpendWise - JavaScript Foundation

// Variables
let budget = 0;
let expenses = 0;
let balance = 0;

// Function to calculate remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// Function to handle the budget form
function startBudget(event) {

    // Prevent the form from refreshing the page
    event.preventDefault();

    // Get input elements
    let budgetInput = document.getElementById("budgetInput").value;
    let expensesInput = document.getElementById("expensesInput").value;

    // Get the error message element
    let errorMessage = document.getElementById("errorMessage");

    // Clear previous error message
    errorMessage.textContent = "";

    // Validate budget input
    if (
        budgetInput.trim() === "" ||
        isNaN(Number(budgetInput)) ||
        Number(budgetInput) < 0
    ) {
        errorMessage.textContent = "Please enter a valid budget amount.";
        return;
    }

    // Validate expenses input
    if (
        expensesInput.trim() === "" ||
        isNaN(Number(expensesInput)) ||
        Number(expensesInput) < 0
    ) {
        errorMessage.textContent = "Please enter a valid expense amount.";
        return;
    }

    // Convert input values to numbers
    budget = Number(budgetInput);
    expenses = Number(expensesInput);

    // Calculate remaining balance
    balance = calculateBalance(budget, expenses);

    // Display results on the webpage
    document.getElementById("budget").textContent = budget;
    document.getElementById("expenses").textContent = expenses;
    document.getElementById("balance").textContent = balance;

    // Display results in the browser console
    console.log("SpendWise Budget Report");
    console.log("-----------------------");
    console.log("Budget: " + budget);
    console.log("Expenses: " + expenses);
    console.log("Remaining Balance: " + balance);
}

// Connect the form to the JavaScript function
document.getElementById("budgetForm").addEventListener("submit", startBudget);

// Confirm JavaScript is working
console.log("SpendWise JavaScript loaded successfully.");