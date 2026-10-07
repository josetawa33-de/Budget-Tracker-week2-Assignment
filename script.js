// SpendWise Expense Tracker

// Store the user's budget
let budget = 0;

// Array used to store all expenses
let expenses = [];

// Get HTML elements from the DOM
const budgetForm = document.getElementById("budgetForm");
const budgetInput = document.getElementById("budgetInput");

const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const expenseAmount = document.getElementById("expenseAmount");
const expenseCategory = document.getElementById("expenseCategory");

const budgetDisplay = document.getElementById("budgetDisplay");
const expenseDisplay = document.getElementById("expenseDisplay");
const balanceDisplay = document.getElementById("balanceDisplay");

const expenseList = document.getElementById("expenseList");
const clearExpensesButton = document.getElementById("clearExpenses");
const message = document.getElementById("message");


// Format money in Kenyan Shillings
function formatCurrency(amount) {
    return "KES " + amount.toFixed(2);
}


// Display a message to the user
function showMessage(text, type) {
    message.textContent = text;
    message.className = "message " + type;

    setTimeout(function () {
        message.textContent = "";
        message.className = "message";
    }, 3000);
}


// Calculate the total amount of expenses
function calculateTotalExpenses() {

    let total = 0;

    expenses.forEach(function (expense) {
        total += expense.amount;
    });

    return total;
}


// Calculate the remaining balance
function calculateBalance() {

    const totalExpenses = calculateTotalExpenses();

    return budget - totalExpenses;
}


// Update the summary displayed on the page
function updateSummary() {

    const totalExpenses = calculateTotalExpenses();
    const balance = calculateBalance();

    budgetDisplay.textContent = formatCurrency(budget);
    expenseDisplay.textContent = formatCurrency(totalExpenses);
    balanceDisplay.textContent = formatCurrency(balance);

    // Conditional statement to check the balance
    if (balance < 0) {
        balanceDisplay.style.color = "#c0392b";
    } else if (balance === 0) {
        balanceDisplay.style.color = "#e67e22";
    } else {
        balanceDisplay.style.color = "#1f4e79";
    }
}


// Display all expenses on the webpage
function displayExpenses() {

    expenseList.innerHTML = "";

    // Conditional statement for an empty expense list
    if (expenses.length === 0) {

        const emptyMessage = document.createElement("p");

        emptyMessage.className = "empty-message";
        emptyMessage.textContent = "No expenses added yet.";

        expenseList.appendChild(emptyMessage);

        return;
    }


    // Loop through the expenses array
    expenses.forEach(function (expense) {

        const expenseItem = document.createElement("div");
        expenseItem.className = "expense-item";

        const expenseInfo = document.createElement("div");
        expenseInfo.className = "expense-info";

        const name = document.createElement("h3");
        name.textContent = expense.name;

        const category = document.createElement("p");
        category.textContent = "Category: " + expense.category;

        const amount = document.createElement("p");
        amount.className = "expense-amount";
        amount.textContent = formatCurrency(expense.amount);

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";

        // Event for deleting an individual expense
        deleteButton.addEventListener("click", function () {

            expenses = expenses.filter(function (item) {
                return item.id !== expense.id;
            });

            displayExpenses();
            updateSummary();

            showMessage("Expense deleted successfully.", "success");
        });


        expenseInfo.appendChild(name);
        expenseInfo.appendChild(category);
        expenseInfo.appendChild(amount);

        expenseItem.appendChild(expenseInfo);
        expenseItem.appendChild(deleteButton);

        expenseList.appendChild(expenseItem);
    });
}


// Handle budget form submission
budgetForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const enteredBudget = Number(budgetInput.value);

    // Validate budget using conditionals
    if (budgetInput.value === "") {

        showMessage("Please enter your budget.", "error");
        return;
    }

    if (isNaN(enteredBudget) || enteredBudget <= 0) {

        showMessage("Please enter a valid budget greater than zero.", "error");
        return;
    }

    budget = enteredBudget;

    updateSummary();

    budgetInput.value = "";

    showMessage("Budget set successfully.", "success");
});


// Handle expense form submission
expenseForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = expenseName.value.trim();
    const amount = Number(expenseAmount.value);
    const category = expenseCategory.value;


    // Validate expense name
    if (name === "") {

        showMessage("Please enter an expense name.", "error");
        return;
    }


    // Validate amount
    if (
        expenseAmount.value === "" ||
        isNaN(amount) ||
        amount <= 0
    ) {

        showMessage("Please enter a valid expense amount.", "error");
        return;
    }


    // Validate category
    if (category === "") {

        showMessage("Please select an expense category.", "error");
        return;
    }


    // Create a new expense object
    const newExpense = {
        id: Date.now(),
        name: name,
        amount: amount,
        category: category
    };


    // Add the expense to the array
    expenses.push(newExpense);


    // Update the DOM
    displayExpenses();
    updateSummary();


    // Clear form fields
    expenseName.value = "";
    expenseAmount.value = "";
    expenseCategory.value = "";


    showMessage("Expense added successfully.", "success");


    // Check if the user has exceeded the budget
    const balance = calculateBalance();

    if (budget > 0 && balance < 0) {

        showMessage(
            "Warning: Your expenses have exceeded your budget.",
            "warning"
        );
    }
});


// Clear all expenses
clearExpensesButton.addEventListener("click", function () {

    if (expenses.length === 0) {

        showMessage("There are no expenses to clear.", "error");
        return;
    }


    const confirmation = confirm(
        "Are you sure you want to delete all expenses?"
    );


    if (confirmation) {

        expenses = [];

        displayExpenses();
        updateSummary();

        showMessage("All expenses have been cleared.", "success");
    }
});


// Initial page setup
updateSummary();
displayExpenses();