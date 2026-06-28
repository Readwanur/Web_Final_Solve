let secretNumber = Math.floor(Math.random() * (5000- 500 + 1)) + 500

let guesses = 0

document.getElementById("submit_btn").addEventListener("click", function(){
    let input_field = document.getElementById("guess_field")
    let result_label = document.getElementById("resultLabel")
    let user_guess = parseInt(input_field.value)
    console.log(user_guess)

    if(isNaN(user_guess)) return

    guesses++

    if(guesses >= 5 && secretNumber !== user_guess){
        result_label.innerText = "Out of guesses!"
        input_field.disabled = true     // Input field locked
        this.disabled = true            // Button locked
        console.log("Secret Number:" + secretNumber)
        return
    }else if(user_guess > secretNumber){
        result_label.innerText = "Too high!"
    }else if(user_guess < secretNumber){
        result_label.innerText = "Too low!"
    }else{
        result_label.innerText = "Correct!"
        input_field.disabled = true     // Input field locked
        this.disabled = true            // Button locked
        console.log("Secret Number:" + secretNumber)
        return
    }
    input_field.value = ""
})