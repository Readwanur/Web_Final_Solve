let totalCalories = 0;
let entryNumber = 0;
let calorieGoal = 2000;
let goalReached = false;

function totalCalorie() {
  const calories = document.getElementById("input").value;
  const feedBack = document.getElementById("feedBack");

  //Adding Calories
  totalCalories += parseInt(calories);

  //Tracking Entries
  entryNumber++;

  //Showing feedBack after every meals entry
  if (entryNumber > 10 && !goalReached) {
    feedBack.innerHTML = "Be cautious of frequent snacking!";
  } else {
    if (totalCalories >= 0 && totalCalories <= 800) {
      feedBack.innerHTML =
        "Total Calories: " +
        totalCalories +
        "<br>" +
        "You're off to a healthy start!";
    } else if (totalCalories >= 801 && totalCalories <= 1600) {
      feedBack.innerHTML =
        "Total Calories: " +
        totalCalories +
        "<br>" +
        "Good progress, keep it balanced!";
    } else if (totalCalories >= 1601 && totalCalories <= 1999) {
      feedBack.innerHTML =
        "Total Calories: " + totalCalories + "<br>" + "Almost at your limit!";
    } else if (totalCalories >= calorieGoal) {
      goalReached = true;
      feedBack.innerHTML =
        "Total Calories: " +
        totalCalories +
        "<br>" +
        "Goal reached! Stay mindful!";
    }
  }

  //Resetting input field
  document.getElementById("input").value = "";
}
