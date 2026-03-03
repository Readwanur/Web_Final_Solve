

function guessTheNumber() {
  const input = document.getElementById("input").value;

  const randomNumber = parseFloat(input) % 500;

  document.getElementById("feedBack").innerHTML = randomNumber;

  //Clearing the input field
  document.getElementById("input").value = "";
  
}

//Optional
function resetFeedBack() {
  //Clearing the feedBack label
  document.getElementById("feedBack").innerHTML = "";
}
