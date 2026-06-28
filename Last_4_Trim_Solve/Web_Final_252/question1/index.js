const target_cal = 2000

let entryCount = 0
let total_cal = 0


document.getElementById("add_btn").addEventListener("click", function(){
    let input_field = document.getElementById("calInput")
    let user_cal = Number(input_field.value)
    let total_cal_field = document.getElementById("total_cal_field")
    let feedback_field = document.getElementById("feedback_field")

    if(isNaN(user_cal) || user_cal <= 0) return

    entryCount++
    total_cal += user_cal

    if(entryCount > 10 && total_cal < target_cal){
        total_cal_field.innerText = total_cal
        feedback_field.innerText = "Be cautious of frequent snacking!"
        console.log(total_cal)
    }else if(total_cal > 0 && total_cal <= 800){
        total_cal_field.innerText = total_cal
        feedback_field.innerText = "You're off to a healthy start!"
        console.log(total_cal)
    }else if(total_cal >= 801 && total_cal <= 1600){
        total_cal_field.innerText = total_cal
        feedback_field.innerText = "Good progress, keep it balanced!"
        console.log(total_cal)
    }else if(total_cal >= 1601 && total_cal <= 1999){
        total_cal_field.innerText = total_cal
        feedback_field.innerText = "Almost at your limit!"
        console.log(total_cal)
    }else{
        total_cal_field.innerText = total_cal
        feedback_field.innerText = "Goal reached! Stay mindful!"
        console.log(total_cal)
    }

    input_field.value = ""
})