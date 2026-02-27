let attempt = 1;
let checkLevel = false;

function checkStrength() {
    let upperCase = false;
    let lowerCase = false;
    let numbers = false;
    let specialChar = false;
    let strLevel = 0;

    const pass = document.getElementById('pass');
    const id = document.getElementById('print');

    // Length Check
    if (pass.value.length >= 6) {
        let lenPoint = pass.value.length / 2;
        strLevel += (10 * parseInt(lenPoint));
    }

    // CharacterCheck
    for (let char of pass.value) {
        if (char >= 'A' && char <= 'Z' && !upperCase) {
            upperCase = true;
        }
        if (char >= 'a' && char <= 'z' && !lowerCase) {
            lowerCase = true;
        }
        if (char >= '0' && char <= '9' && !numbers) {
            numbers = true;
        }
        if ((char == '!' || char == '@' || char == '#' || char == '$' || char == '%' || char == '^' || char == '&' || char == '*') && specialChar == false) {
            specialChar = true;
        }
        if (upperCase && lowerCase && numbers && specialChar) break;
    }

    // Adding Points
    if (upperCase) strLevel += 15;
    if (lowerCase) strLevel += 15;
    if (numbers) strLevel += 20;
    if (specialChar) strLevel += 25;

    // PointsCheck
    if (strLevel >= 0 && strLevel <= 30) id.innerText = 'Very Weak';
    else if (strLevel >= 31 && strLevel <= 50) id.innerText = 'Weak';
    else if (strLevel >= 51 && strLevel <= 70) id.innerText = 'Medium';
    else if (strLevel >= 71 && strLevel <= 90) id.innerText = 'Strong';
    else if (strLevel >= 91) {
        if (strLevel <= 100) id.innerText = 'Very Strong';
        else {
            id.innerHTML = 'Perfect Password!' + '<br>' + 'Successfully reached 100+ Strength level';
            checkLevel = true;
        }
    }

    // AttemptCheck
    if (attempt > 8 && !checkLevel) {
        id.innerHTML = 'Need practice!' + '<br>' + 'Use minimum 6 characters, upperCase, lowerCase, numbers, specialCharacters';
    }

    attempt++;
    pass.value = '';
}