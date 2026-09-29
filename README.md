# SpendWise - JavaScript Foundation

## Project Description

SpendWise is a simple budget and expense tracking application designed to help users manage their budgeting information.

The application allows users to enter their total budget and total expenses. JavaScript then validates the information, performs the budget calculation, updates the webpage, and displays a clearly labeled report in the browser console.

This project builds on the SpendWise visual application by adding JavaScript functionality and making the application interactive.

---

## JavaScript Concepts Implemented

The following JavaScript concepts are used in this project:

* Variables
* Data types
* User input
* Number conversion
* Input validation
* Conditional statements
* Arithmetic calculations
* Functions
* Function parameters
* Return values
* DOM manipulation
* Console output

---

## 1. Variables

Variables are used to store the main budgeting information.

```javascript
let budget = 0;
let expenses = 0;
let balance = 0;
```

The `budget` variable stores the user's total budget.

The `expenses` variable stores the user's total expenses.

The `balance` variable stores the amount remaining after expenses are subtracted from the budget.

The variables use `let` because their values can change when the user enters new information.

---

## 2. Data Types and Number Conversion

The `prompt()` function returns user input as text (a string), even when the user enters a number.

SpendWise therefore converts the input into numbers using the `Number()` function.

```javascript
budget = Number(budgetInput);
expenses = Number(expensesInput);
```

This conversion is important because the application needs to perform mathematical calculations using the budget and expense values.

For example, the input:

```text
50000
```

is converted from a string into the number:

```text
50000
```

---

## 3. Collecting User Input

SpendWise uses JavaScript's `prompt()` function to collect information directly from the user.

First, the application asks for the total budget:

```javascript
let budgetInput = prompt("Enter your total budget:");
```

The application then asks for the total expenses:

```javascript
let expensesInput = prompt("Enter your total expenses:");
```

The values entered by the user are stored in variables.

The application then converts these values into numbers so they can be used in calculations.

This makes the application interactive because the results depend on information entered by the user.

---

## 4. Input Validation

Input validation is used to prevent invalid information from being processed.

SpendWise checks whether the user:

* Cancels the prompt.
* Leaves the input empty.
* Enters text instead of a number.

The budget input is validated using a conditional statement:

```javascript
if (budgetInput === null || budgetInput.trim() === "" || isNaN(Number(budgetInput))) {
    alert("Please enter a valid budget amount.");
    return;
}
```

The same type of validation is applied to the expenses input.

The `isNaN()` function helps determine whether the entered value can be treated as a number.

The `return` statement stops the function when invalid information is entered. This prevents the application from continuing with incorrect data.

For example, if the user enters:

```text
hello
```

the application displays:

```text
Please enter a valid budget amount.
```

The application also handles an empty input and a cancelled prompt.

---

## 5. Conditional Statements

Conditional statements are used to make decisions based on the user's input.

For example:

```javascript
if (budgetInput === null || budgetInput.trim() === "" || isNaN(Number(budgetInput))) {
    alert("Please enter a valid budget amount.");
    return;
}
```

The condition checks several possible situations.

If the user cancels the prompt, leaves it empty, or enters invalid text, the application displays an error message and stops processing that input.

Conditional statements therefore help SpendWise respond correctly to different types of user input.

---

## 6. Budget Calculations

SpendWise calculates the remaining balance using the following formula:

```text
Remaining Balance = Budget - Expenses
```

For example, if the user enters:

```text
Budget = 50000
Expenses = 15000
```

the application calculates:

```text
Remaining Balance = 50000 - 15000
Remaining Balance = 35000
```

The calculation is performed by the reusable `calculateBalance()` function.

```javascript
function calculateBalance(budget, expenses) {
    return budget - expenses;
}
```

The function receives the budget and expenses as parameters and returns the calculated remaining balance.

The calculation also works when expenses are greater than the budget.

For example:

```text
Budget = 10000
Expenses = 12000
Remaining Balance = -2000
```

This shows that the calculation correctly handles different input values.

---

## 7. Functions

Functions are used to organize the JavaScript code and make calculations reusable.

SpendWise contains the following important functions:

### calculateBalance()

```javascript
function calculateBalance(budget, expenses) {
    return budget - expenses;
}
```

The `calculateBalance()` function receives two parameters:

* `budget`
* `expenses`

It subtracts expenses from the budget and returns the result.

The function is called using:

```javascript
balance = calculateBalance(budget, expenses);
```

Using a separate function makes the calculation reusable and keeps the code organized.

### startBudget()

The `startBudget()` function manages the main budgeting process.

It:

1. Collects the user's budget.
2. Validates the budget input.
3. Converts the budget into a number.
4. Collects the user's expenses.
5. Validates the expenses input.
6. Converts the expenses into a number.
7. Calculates the remaining balance.
8. Updates the webpage.
9. Displays the results in the browser console.

This function connects the different parts of the SpendWise application.

---

## 8. Displaying Results on the Webpage

After the calculation is completed, JavaScript updates the webpage using DOM manipulation.

The application uses:

```javascript
document.getElementById("budget").textContent = budget;
document.getElementById("expenses").textContent = expenses;
document.getElementById("balance").textContent = balance;
```

This updates the values displayed on the webpage.

For example, after entering:

```text
Budget = 50000
Expenses = 15000
```

the webpage displays:

```text
Budget: 50000
Expenses: 15000
Remaining Balance: 35000
```

The user can see the updated results without manually editing the HTML.

---

## 9. Console Output

The assignment requires the calculated results to be displayed in the browser console.

SpendWise uses `console.log()` to display a clearly labeled budget report:

```javascript
console.log("SpendWise Budget Report");
console.log("-----------------------");
console.log("Budget: " + budget);
console.log("Expenses: " + expenses);
console.log("Remaining Balance: " + balance);
```

Example console output:

```text
SpendWise Budget Report
-----------------------
Budget: 50000
Expenses: 15000
Remaining Balance: 35000
```

This makes it easy to test and verify that the JavaScript calculations are working correctly.

---

## 10. How the Complete JavaScript Process Works

The complete SpendWise process works as follows:

```text
User clicks the button
        ↓
JavaScript asks for the budget
        ↓
Budget input is validated
        ↓
Budget is converted to a number
        ↓
JavaScript asks for expenses
        ↓
Expense input is validated
        ↓
Expenses are converted to a number
        ↓
calculateBalance() performs the calculation
        ↓
The webpage is updated
        ↓
The results are displayed in the console
```

This process demonstrates how JavaScript can collect information, make decisions, perform calculations, and update a webpage.

---

## 11. Testing

The application was tested using different types of input.

### Test 1: Normal budget

```text
Budget: 50000
Expenses: 15000
Remaining Balance: 35000
```

### Test 2: Zero expenses

```text
Budget: 50000
Expenses: 0
Remaining Balance: 50000
```

### Test 3: Expenses greater than budget

```text
Budget: 10000
Expenses: 12000
Remaining Balance: -2000
```

### Test 4: Text input

Entering:

```text
hello
```

produces:

```text
Please enter a valid budget amount.
```

### Test 5: Empty input

Leaving the budget input empty produces:

```text
Please enter a valid budget amount.
```

### Test 6: Cancelled input

Clicking `Cancel` on the budget prompt produces:

```text
Please enter a valid budget amount.
```

These tests demonstrate that the application can handle both valid and invalid user input.

---

## 12. How to Run the Project

1. Download or clone the SpendWise repository.
2. Open the project folder in VS Code.
3. Make sure the following files are present:

```text
index.html
style.css
script.js
README.md
```

4. Open `index.html` using a web browser or VS Code Live Server.
5. Click the **Enter Budget Information** button.
6. Enter the total budget when prompted.
7. Enter the total expenses when prompted.
8. View the calculated remaining balance on the webpage.
9. Open the browser Developer Tools.
10. Select the **Console** tab to view the JavaScript budget report.

---

## 13. Project Files

### index.html

Contains the HTML structure and content of the SpendWise webpage.

### style.css

Contains the styling and visual design of the application.

### script.js

Contains the JavaScript variables, user input, input validation, conditional statements, calculations, functions, DOM manipulation, and console output.

### README.md

Contains documentation explaining the SpendWise application and the JavaScript concepts used in the project.

---

## 14. Assignment Requirements Covered

This project meets the main JavaScript Foundation requirements:

| Requirement         | Implementation                                 |
| ------------------- | ---------------------------------------------- |
| Link JavaScript     | `script.js` is linked to `index.html`          |
| Variables           | `budget`, `expenses`, and `balance`            |
| User input          | `prompt()`                                     |
| Input validation    | `if`, `isNaN()`, empty-input and Cancel checks |
| Number conversion   | `Number()`                                     |
| Calculations        | Budget minus expenses                          |
| Reusable function   | `calculateBalance()`                           |
| Function parameters | `budget` and `expenses`                        |
| Return value        | `return budget - expenses`                     |
| Webpage results     | DOM manipulation using `getElementById()`      |
| Console results     | `console.log()`                                |
| Testing             | Six valid and invalid input tests              |

---

## Conclusion

The SpendWise JavaScript Foundation project demonstrates how JavaScript can transform a static webpage into an interactive budget application.

The project uses variables to store budgeting information, `prompt()` to collect user input, `Number()` to convert input into numbers, conditional statements and `isNaN()` for input validation, arithmetic calculations to determine the remaining balance, and reusable functions to organize the application logic.

The project also uses DOM manipulation to update the webpage and `console.log()` to display clearly labeled calculation results in the browser console.

Through testing with normal values, zero expenses, expenses greater than the budget, text input, empty input, and cancelled input, the application demonstrates that it can process user input and handle invalid data appropriately.
