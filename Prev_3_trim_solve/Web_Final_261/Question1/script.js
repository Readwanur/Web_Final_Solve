
let spo2_arr = []
let heart_rate_arr = []

document.getElementById("save").addEventListener("click", function(){
    let heart_rate_field = document.getElementById("heart_rate")
    let heart_rate = Number(heart_rate_field.value)
    let spo2_field = document.getElementById("spo2")
    let spo2 = Number(spo2_field.value)
    let report = document.getElementById("report")
    let feedback = document.getElementById("feedback")

    if(isNaN(heart_rate) || isNaN(heart_rate)) return;

    heart_rate_arr.push(heart_rate)
    spo2_arr.push(spo2)

    // Acg heart_rate
    let sum_hr = 0
    for(let i = 0; i < heart_rate_arr.length;i++){
        sum_hr += heart_rate_arr[i];
    }
    let avg_hr = sum_hr / heart_rate_arr.length

    // Avg SPO2
    let sum_spo2 = 0
    for(let i = 0; i < spo2_arr.length;i++){
        sum_spo2 += spo2_arr[i];
    }
    let avg_spo2 = sum_spo2 / spo2_arr.length

    let risk_score = parseFloat(((100-spo2) * 2) + (Math.abs(heart_rate-80) * 0.5))

    report.innerHTML = "Avg Heart Rate: " + avg_hr + "<br>" + "Avg SpO2: " + avg_spo2 + "<br>" + "Risk Score: " + risk_score

    if(risk_score <= 10){
        feedback.innerText = "Feedback: SAFE"
    }else if(risk_score > 10 && risk_score <= 20){
        feedback.innerText = "Feedback: WARNING"
    }else if(risk_score > 20){
        feedback.innerText = "Feedback: DANGER"
    }

})