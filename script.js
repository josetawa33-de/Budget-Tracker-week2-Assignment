/* =========================================
   SpendWise - Interactive JavaScript
   ========================================= */


/* ---------- Application State ---------- */

// Stores the current budget.
let budget = 0;


// Stores all expense objects.
let expenses = [];


/* ---------- DOM Elements ---------- */

const budgetForm =
    document.getElementById("budgetForm");

const budgetInput =
    document.getElementById("budgetInput");


const expenseForm =
    document.getElementById("expenseForm");

const expenseName =
    document.getElementById("expenseName");

const expenseAmount =
    document.getElementById("expenseAmount");

const expenseCategory =
    document.getElementById("expenseCategory");


const budgetDisplay =
    document.getElementById("budgetDisplay");

const expenseDisplay =
    document.getElementById("expenseDisplay");

const balanceDisplay =
    document.getElementById("balanceDisplay");

const expenseCount =
    document.getElementById("expenseCount");


const expenseList =
    document.getElementById("expenseList");

const clearExpensesButton =
    document.getElementById("clearExpenses");

const message =
    document.getElementById("message");


/* ---------- Currency Function ---------- */

function formatCurrency(amount) {

    return "KES " + amount.toFixed(2);

}


/* ---------- Message Function ---------- */

function showMessage(text, type) {

    message.textContent = text;

    message.className = "message " + type;


    // Automatically hide the message.
    setTimeout(function () {

        message.textContent = "";

        message.className = "message";

    }, 3500);

}


/* ---------- Calculate Total Expenses ---------- */

function calculateTotalExpenses() {

    let total = 0;


    // Loop through the expenses array.
    expenses.forEach(function (expense) {

        total += expense.amount;

    });


    return total;

}


/* ---------- Calculate Balance ---------- */

function calculateBalance() {

    const totalExpenses =
        calculateTotalExpenses();


    return budget - totalExpenses;

}


/* ---------- Update Summary ---------- */

function updateSummary() {

    const totalExpenses =
        calculateTotalExpenses();


    const balance =
        calculateBalance();


    // Update the DOM.
    budgetDisplay.textContent =
        formatCurrency(budget);


    expenseDisplay.textContent =
        formatCurrency(totalExpenses);


    balanceDisplay.textContent =
        formatCurrency(balance);


    expenseCount.textContent =
        expenses.length;


    /*
        Conditional feedback:
        Different colors are used depending
        on the remaining balance.
    */

    if (balance < 0) {

        balanceDisplay.style.color = "#c0392b";

    }

    else if (balance === 0 && budget > 0) {

        balanceDisplay.style.color = "#e67e22";

    }

    else {

        balanceDisplay.style.color = "#1f4e79";

    }

}


/* ---------- Display Expenses ---------- */

function displayExpenses() {

    // Clear the current DOM list.
    expenseList.innerHTML = "";


    /*
        Conditional:
        If there are no expenses, show
        an empty-state message.
    */

    if (expenses.length === 0) {

        const emptyState =
            document.createElement("div");


        emptyState.className =
            "empty-state";


        emptyState.innerHTML = `
            <div class="empty-icon">📝</div>
            <h3>No expenses yet</h3>
            <p>
                Add your first expense to start
                tracking your spending.
            </p>
        `;


        expenseList.appendChild(emptyState);

        return;

    }


    /*
        Loop through the expenses array
        and create DOM elements.
    */

    expenses.forEach(function (expense) {

        const expenseItem =
            document.createElement("div");


        expenseItem.className =
            "expense-item";


        const expenseMain =
            document.createElement("div");


        expenseMain.className =
            "expense-main";


        const name =
            document.createElement("h3");


        name.textContent =
            expense.name;


        const category =
            document.createElement("p");


        category.className =
            "expense-category";


        category.textContent =
            "Category: " + expense.category;


        expenseMain.appendChild(name);

        expenseMain.appendChild(category);


        const expenseRight =
            document.createElement("div");


        expenseRight.className =
            "expense-right";


        const amount =
            document.createElement("span");


        amount.className =
            "expense-amount";


        amount.textContent =
            formatCurrency(expense.amount);


        const deleteButton =
            document.createElement("button");


        deleteButton.type = "button";

        deleteButton.className =
            "delete-button";


        deleteButton.textContent =
            "Delete";


        /*
            Event listener for deleting
            an individual expense.
        */

        deleteButton.addEventListener(
            "click",
            function () {

                deleteExpense(expense.id);

            }
        );


        expenseRight.appendChild(amount);

        expenseRight.appendChild(deleteButton);


        expenseItem.appendChild(expenseMain);

        expenseItem.appendChild(expenseRight);


        expenseList.appendChild(expenseItem);

    });

}


/* ---------- Delete Individual Expense ---------- */

function deleteExpense(id) {

    /*
        filter() creates a new array
        without the selected expense.
    */

    expenses = expenses.filter(
        function (expense) {

            return expense.id !== id;

        }
    );


    // Re-render the interface.
    displayExpenses();

    updateSummary();


    showMessage(
        "Expense deleted successfully.",
        "success"
    );

}


/* ---------- Budget Form Event ---------- */

budgetForm.addEventListener(
    "submit",
    function (event) {

        // Prevent page refresh.
        event.preventDefault();


        const enteredBudget =
            Number(budgetInput.value);


        /*
            Validation:
            Check for an empty input.
        */

        if (budgetInput.value.trim() === "") {

            showMessage(
                "Please enter your budget.",
                "error"
            );

            return;

        }


        /*
            Validation:
            Check for a valid positive number.
        */

        if (
            isNaN(enteredBudget) ||
            enteredBudget <= 0
        ) {

            showMessage(
                "Please enter a valid budget greater than zero.",
                "error"
            );

            return;

        }


        // Update application state.
        budget = enteredBudget;


        // Update the interface.
        updateSummary();


        // Clear input.
        budgetInput.value = "";


        showMessage(
            "Budget updated successfully.",
            "success"
        );


        /*
            Check whether current expenses
            are already above the new budget.
        */

        if (
            expenses.length > 0 &&
            calculateBalance() < 0
        ) {

            showMessage(
                "Warning: Your current expenses exceed the new budget.",
                "warning"
            );

        }

    }
);


/* ---------- Expense Form Event ---------- */

expenseForm.addEventListener(
    "submit",
    function (event) {

        // Prevent page refresh.
        event.preventDefault();


        const name =
            expenseName.value.trim();


        const amount =
            Number(expenseAmount.value);


        const category =
            expenseCategory.value;


        /*
            Validate expense name.
        */

        if (name === "") {

            showMessage(
                "Please enter an expense name.",
                "error"
            );

            expenseName.focus();

            return;

        }


        /*
            Validate amount.
            Small amounts such as KES 10,
            KES 50, or KES 150 are allowed.
        */

        if (
            expenseAmount.value.trim() === "" ||
            isNaN(amount) ||
            amount <= 0
        ) {

            showMessage(
                "Please enter a valid expense amount greater than zero.",
                "error"
            );

            expenseAmount.focus();

            return;

        }


        /*
            Validate category.
        */

        if (category === "") {

            showMessage(
                "Please select an expense category.",
                "error"
            );

            expenseCategory.focus();

            return;

        }


        /*
            Create an expense object.
        */

        const newExpense = {

            id: Date.now(),

            name: name,

            amount: amount,

            category: category

        };


        /*
            Store the object inside
            the expenses array.
        */

        expenses.push(newExpense);


        /*
            Re-render the interface
            after changing the state.
        */

        displayExpenses();

        updateSummary();


        // Clear the form.
        expenseForm.reset();


        showMessage(
            "Expense added successfully.",
            "success"
        );


        /*
            Conditional warning if expenses
            have exceeded the budget.
        */

        if (
            budget > 0 &&
            calculateBalance() < 0
        ) {

            showMessage(
                "Warning: Your expenses have exceeded your budget.",
                "warning"
            );

        }

    }
);


/* ---------- Clear All Expenses Event ---------- */

clearExpensesButton.addEventListener(
    "click",
    function () {

        /*
            Conditional:
            Do not ask for confirmation if
            there are no expenses.
        */

        if (expenses.length === 0) {

            showMessage(
                "There are no expenses to clear.",
                "error"
            );

            return;

        }


        const confirmed =
            confirm(
                "Are you sure you want to delete all expenses?"
            );


        if (confirmed) {

            // Reset the array.
            expenses = [];


            // Update the interface.
            displayExpenses();

            updateSummary();


            showMessage(
                "All expenses have been cleared.",
                "success"
            );

        }

    }
);


/* ---------- Initial Application Setup ---------- */

/*
    The application starts with:
    budget = 0
    expenses = []

    These values match the initial HTML
    values of KES 0.00 and 0 expenses.
*/

updateSummary();

displayExpenses();