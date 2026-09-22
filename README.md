# SpendWise Dashboard Shell

## Week 4 Assignment

SpendWise is a responsive financial dashboard shell designed using HTML and modern CSS layout techniques. The purpose of this project is to create the visual foundation of a future expense and budget tracking application.

The dashboard uses CSS Grid and Flexbox to create a clean and responsive layout.

## Project Files

### `index.html`

The `index.html` file contains the structure of the SpendWise dashboard.

It includes:

- Sidebar navigation menu
- Dashboard header
- User profile section
- Financial summary section
- Six spending category cards
- Food
- Transport
- Rent
- Entertainment
- Savings
- Utilities

The financial information is static because this assignment focuses on the visual layout rather than application functionality.

### `style.css`

The `style.css` file controls the design, layout, and responsiveness of the dashboard.

It includes:

- CSS Grid for the main dashboard layout
- CSS Grid for the category cards
- Flexbox for the sidebar
- Flexbox for the header
- Flexbox for card content
- CSS custom properties for the color theme
- Responsive design using media queries
- Hover and keyboard focus effects
- Dark theme support

## CSS Grid

CSS Grid is used for the overall dashboard layout.

The desktop layout contains:

- A sidebar on the left
- Main dashboard content on the right

CSS Grid is also used to arrange the six spending category cards into multiple columns.

## Flexbox

Flexbox is used to organize content inside different parts of the dashboard.

It is used for:

- Sidebar navigation
- Header content
- User profile
- Dashboard cards
- Card icons and status labels
- Financial amounts

## CSS Custom Properties

The project uses CSS custom properties in the `:root` selector to create a consistent theme.

The variables include:

- Brand color
- Accent color
- Background color
- Surface color
- Primary text color
- Secondary text color

Using CSS variables makes the theme easier to maintain and modify.

## Responsive Design

The dashboard is responsive and adapts to different screen sizes.

Below `768px`, the layout changes to a single-column layout for smaller screens such as tablets and mobile phones.

The responsive design can be tested using the browser's DevTools Device Toolbar.

## Card Micro-interactions

The spending category cards include simple micro-interactions.

When a user:

- Hovers over a card
- Uses the keyboard to focus on a card

the card moves slightly upward and receives an enhanced shadow.

The transition lasts 200ms, keeping the animation fast and subtle.

## Dark Theme

The project includes a dark theme using:

`@media (prefers-color-scheme: dark)`

The dark theme changes the CSS custom properties to provide a darker dashboard appearance when the user's system is using dark mode.

## Technologies Used

- HTML5
- CSS3
- CSS Grid
- Flexbox
- CSS Custom Properties
- Media Queries
- Google Fonts

## Conclusion

The SpendWise Dashboard Shell provides the visual foundation for a future financial management application. It demonstrates the use of modern CSS layout techniques, responsive design, custom properties, and user-friendly micro-interactions.

The dashboard currently contains static financial information and can be extended with JavaScript and backend functionality in future development.