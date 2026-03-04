let attempt = 0;

const randomNumber = Math.floor(Math.random() * (5000 - 500 + 1)) + 500;

function guessTheNumber() {
  const guess = parseInt(document.getElementById("input").value);
  if(isNaN(guess)) return;
  attempt++;

  // document.getElementById("feedBack").innerHTML = randomNumber;

  if (attempt <= 5) {
    if (guess > randomNumber) {
      document.getElementById("feedBack").innerHTML = "Too high!";
      document.getElementById("input").value = "";
    } else if (guess < randomNumber) {
      document.getElementById("feedBack").innerHTML = "Too low!";
      document.getElementById("input").value = "";
    } else {
      document.getElementById("feedBack").innerHTML = "Correct!";
      document.getElementById("input").disabled = true;
      document.getElementById("input").value = "";
      return;
    }
  } else{
    document.getElementById("feedBack").innerHTML =
    
      "Out of guesses!" + "<br>" + "The secret number is " + randomNumber;
    document.getElementById("input").disabled = true;
    document.getElementById("input").value = "";
    attempt = 0;
    return;
  }

  //Clearing the input field
  document.getElementById("input").value = "";
}
