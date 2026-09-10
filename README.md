# Budget Tracker – Week 2 Assignment

## Overview
This project builds on my Week 1 Budget Tracker by adding new HTML and CSS features. It demonstrates proper table structure, form upgrades, multimedia content, interactive elements, and advanced CSS selectors.

## Features

### 1. Expense Table
- Structured with `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<th>`, and `<td>`.
- Includes 5 sample rows of expense data (Name, Amount, Category, Date).
- Styled with:
  - Borders (`border-collapse: collapse`)
  - Padding inside cells
  - Colored header row
  - Alternating row background colors (`tr:nth-child(even)`)
  - Hover effect on rows

### 2. Add Expense Form
- Wrapped in a `<form>` element.
- Inputs for **Name** and **Amount** with clear IDs.
- Category implemented as a `<select>` dropdown with 5 options:
  - Food, Transport, Rent, Entertainment, Other
- Button with `type="button"` labeled **Add Expense**.
- All inputs have matching IDs for future JavaScript use.

### 3. Multimedia Content
- Logo image near the main heading (`<img>` with `src`, `alt`, and `width`).
- Embedded YouTube video using `<iframe>` with proper attributes (`width`, `height`, `title`, `frameborder`, `allowfullscreen`).

### 4. Interactive Elements
- `<details>` and `<summary>` section explaining how to use the tracker.
- Table rows change background color on hover.
- Button shows pointer cursor when hovered.

### 5. Advanced CSS Selectors
- **Descendant selector:** `.expenses-section td` (styles table cells).
- **Direct child selector + focus:** `.add-expense-section > form > input:focus` (highlights input when focused).
- **Negation pseudo-class:** `input:not([type="submit"])` (applies background color to all inputs except submit).

## How to Run
1. Clone this repository.
2. Open `index.html` in your browser.
3. Explore the form, table, multimedia, and interactive elements.

## Files
- `index.html` – Main HTML structure
- `style.css` – Styling rules
- `README.md` – Explanation of features and usage
