# SpendWise - Week 6

## Make SpendWise Interactive

SpendWise is a simple personal expense tracker developed using HTML, CSS, and JavaScript. The purpose of this project is to help users set a budget, record their expenses, view their total spending, and calculate their remaining balance.

This Week 6 version improves the previous SpendWise project by adding JavaScript interactivity and allowing users to interact with the application.

---

## Features

The SpendWise application includes the following features:

* Set a personal budget.
* Add expenses.
* Select an expense category.
* View the total amount spent.
* View the remaining balance.
* Delete individual expenses.
* Clear all expenses.
* Validate user input.
* Display messages to the user.
* Warn the user when expenses exceed the budget.
* Automatically update the page when information changes.
* Responsive design for different screen sizes.

---

## Files in the Project

The project contains four main files:

```text
SpendWise/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### index.html

This file contains the structure and content of the SpendWise application.

### style.css

This file contains the styling and responsive design of the application.

### script.js

This file contains the JavaScript functionality that makes SpendWise interactive.

### README.md

This file explains the project, JavaScript concepts used, improvements made, and challenges encountered.

---

# Improvements Made This Week

Several improvements were made to SpendWise during Week 6.

First, the application was made interactive using JavaScript. Users can now enter their budget and add expenses through forms.

Second, expenses are stored in a JavaScript array. This allows the application to keep multiple expense records and display them dynamically.

Third, the application automatically calculates the total expenses and remaining balance.

Fourth, users can delete individual expenses or clear all expenses.

Fifth, input validation was added to prevent users from submitting empty or invalid information.

Finally, the application provides messages and warnings to help users understand what is happening. For example, the application warns the user when their expenses exceed their budget.

---

# How Conditionals Are Used

Conditional statements are used in several parts of the SpendWise application.

For example, the application checks whether the user entered a valid budget:

```javascript
if (budgetInput.value === "") {
    showMessage("Please enter your budget.", "error");
    return;
}
```

Another conditional checks whether the budget is a valid positive number:

```javascript
if (isNaN(enteredBudget) || enteredBudget <= 0) {
    showMessage("Please enter a valid budget greater than zero.", "error");
    return;
}
```

Conditionals are also used to determine whether the user has exceeded their budget:

```javascript
if (balance < 0) {
    balanceDisplay.style.color = "#c0392b";
} else if (balance === 0) {
    balanceDisplay.style.color = "#e67e22";
} else {
    balanceDisplay.style.color = "#1f4e79";
}
```

These conditionals help the program make decisions based on the information entered by the user.

---

# How Arrays Are Used

An array is used to store the expenses entered by the user.

The expenses array is created using:

```javascript
let expenses = [];
```

Whenever a user adds an expense, an expense object is created and added to the array using:

```javascript
expenses.push(newExpense);
```

Each expense contains an ID, name, amount, and category.

For example:

```javascript
const newExpense = {
    id: Date.now(),
    name: name,
    amount: amount,
    category: category
};
```

The application uses the `forEach()` method to go through the array and display each expense on the webpage.

The array makes it possible for SpendWise to manage multiple expenses instead of storing only one expense.

---

# How the DOM Is Updated

The Document Object Model (DOM) allows JavaScript to interact with HTML elements on the webpage.

SpendWise uses JavaScript to select HTML elements using:

```javascript
document.getElementById()
```

For example:

```javascript
const budgetDisplay = document.getElementById("budgetDisplay");
```

The application then updates the content of the page using:

```javascript
budgetDisplay.textContent = formatCurrency(budget);
```

The expense list is also created dynamically using:

```javascript
document.createElement()
```

For example:

```javascript
const expenseItem = document.createElement("div");
```

The new elements are then added to the webpage using:

```javascript
expenseList.appendChild(expenseItem);
```

This allows the webpage to update automatically whenever the user adds or deletes an expense.

---

# How User Interactions Are Handled Through Events

JavaScript events are used to respond to actions performed by the user.

For example, when the user submits the budget form, the application listens for the `submit` event:

```javascript
budgetForm.addEventListener("submit", function (event) {
```

The application also listens for the expense form submission:

```javascript
expenseForm.addEventListener("submit", function (event) {
```

When a user clicks the delete button, a click event is used:

```javascript
deleteButton.addEventListener("click", function () {
```

The Clear All button also uses a click event:

```javascript
clearExpensesButton.addEventListener("click", function () {
```

Events make it possible for the application to respond immediately to user actions.

---

# Input Validation

Input validation was added to make the application more reliable.

The program checks that:

* The budget is not empty.
* The budget is greater than zero.
* The expense name is not empty.
* The expense amount is valid.
* The expense amount is greater than zero.
* An expense category has been selected.

For example:

```javascript
if (name === "") {
    showMessage("Please enter an expense name.", "error");
    return;
}
```

Validation helps prevent incorrect information from being added to the application.

---

# Challenges Encountered

One challenge was making sure that the total expenses were calculated correctly when multiple expenses were added.

This was resolved by storing all expenses inside an array and using a loop to calculate the total:

```javascript
expenses.forEach(function (expense) {
    total += expense.amount;
});
```

Another challenge was updating the webpage whenever an expense was added or deleted.

This was resolved by creating an `updateSummary()` function and a `displayExpenses()` function. These functions are called whenever the data changes.

Another challenge was handling invalid user input. Users could enter empty fields or invalid numbers.

This was resolved by adding conditional statements and validation before adding information to the application.

---

# Testing

The following functionality was tested:

| Test                            | Expected Result               | Status |
| ------------------------------- | ----------------------------- | ------ |
| Set a valid budget              | Budget is displayed           | Passed |
| Submit an empty budget          | Error message appears         | Passed |
| Enter an invalid budget         | Error message appears         | Passed |
| Add a valid expense             | Expense appears in the list   | Passed |
| Add multiple expenses           | All expenses appear           | Passed |
| Submit empty expense name       | Error message appears         | Passed |
| Submit invalid amount           | Error message appears         | Passed |
| Submit without category         | Error message appears         | Passed |
| Delete an expense               | Expense is removed            | Passed |
| Clear all expenses              | All expenses are removed      | Passed |
| Calculate total expenses        | Total updates automatically   | Passed |
| Calculate remaining balance     | Balance updates automatically | Passed |
| Exceed the budget               | Warning is displayed          | Passed |
| Use application on small screen | Layout adjusts                | Passed |

---

# Technologies Used

The project was developed using:

* HTML5
* CSS3
* JavaScript
* Visual Studio Code
* Git
* GitHub

---

# Learning Outcomes

Through this Week 6 project, I improved my understanding of JavaScript and how it can be used to create interactive websites.

I learned how to:

* Use variables.
* Use arrays.
* Create and use objects.
* Use functions.
* Use conditional statements.
* Use loops.
* Handle events.
* Manipulate the DOM.
* Validate user input.
* Dynamically create HTML elements.
* Update webpage content using JavaScript.

This project helped me understand the connection between HTML, CSS, and JavaScript in building an interactive web application.

---

# Conclusion

SpendWise has been improved from a static webpage into an interactive expense tracking application.

Users can now set a budget, add expenses, select categories, view their spending, calculate their remaining balance, delete expenses, and receive warnings when they exceed their budget.

The project demonstrates the use of important JavaScript concepts including conditionals, arrays, functions, events, DOM manipulation, loops, and input validation.

The Week 6 improvements have made SpendWise more useful, interactive, and user-friendly.
