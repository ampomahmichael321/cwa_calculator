let cumulativeCredits = 0; //Number of credits from last year
let numOfSemCourses = 0;
let totalSemCredits = 0; //Total credits for the current semester
let targetCwa = 0;
let cumScore = 0; // Cumulative score from the past semester

function calculatePlan() {
  const targetSemScore =
    targetCwa * (cumulativeCredits + totalSemCredits) - cumScore;
  const averageScore = (targetSemScore / totalSemCredits).toFixed(2);
  return { targetSemScore, averageScore };
}

const calculatorForm = document.querySelector(".calculator-form");
const cumulativeCreditsInput = document.querySelector("#cumulativeCredits");
const numOfSemCoursesInput = document.querySelector("#numOfSemCourses");
const totalSemCreditsInput = document.querySelector("#totalSemCredits");
const targetCwaInput = document.querySelector("#targetCwa");
const cumScoreInput = document.querySelector("#cumScore");
const averageDisplay = document.querySelector(".score-display strong");
const resultNote = document.querySelector(".result-note");
calculatorForm.addEventListener("submit", function (event) {
  event.preventDefault();

  cumulativeCredits = Number(cumulativeCreditsInput.value);
  numOfSemCourses = Number(numOfSemCoursesInput.value);
  totalSemCredits = Number(totalSemCreditsInput.value);
  targetCwa = Number(targetCwaInput.value);
  cumScore = Number(cumScoreInput.value);

  const plan = calculatePlan();

  averageDisplay.textContent = plan.averageScore;
  resultNote.textContent = `You need an average score of ${plan.averageScore} in every course to achieve your target CWA of ${targetCwa}% for this semester.`;

  console.log(`You need an average score of ${plan.averageScore}`);
});
