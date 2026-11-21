# CWA Calculator

A simple web application that helps students calculate the average score they need in every course during a current semester to achieve their target Cumulative Weighted Average (CWA).

## Features

- Enter cumulative credits from previous semesters
- Enter the cumulative weighted score already earned
- Enter the number of courses in the current semester
- Enter the total credits for the current semester
- Set a target CWA
- Calculate the required average course score
- View the target CWA and semester credit total in the results panel

## How It Works

The application uses the student's past cumulative credits and score, together with the current semester's credit total and target CWA.

$$
\text{Target Semester Score} = \text{Target CWA} \times (\text{Cumulative Credits} + \text{Semester Credits}) - \text{Cumulative Score}
$$

$$
\text{Required Average} = \frac{\text{Target Semester Score}}{\text{Semester Credits}}
$$

The calculator displays the required average score as a percentage out of 100.

## Getting Started

No installation or framework is required.

1. Download or clone this repository.
2. Open `index.html` in a web browser.
3. Enter the requested academic information.
4. Select **Calculate required average**.

The result will show the average score needed in the current semester to reach the selected target CWA.

## Project Files

- `index.html` - Page structure and calculator form
- `index.css` - Layout and visual styling
- `calculator.js` - Form handling and CWA calculation logic

## Example

For a student with:

- 74 cumulative credits
- 4908 cumulative points
- 21 semester credits
- A target CWA of 70

The application calculates the average score needed during the semester to achieve that target CWA.

## Technologies

- HTML
- CSS
- JavaScript
