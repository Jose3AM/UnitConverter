const button = document.getElementById("convertButton");

button.addEventListener("click", function() {

const lengthResult = document.getElementById("lengthResult");
const volumeResult = document.getElementById("volumeResult");
const massResult = document.getElementById("massResult");

let numberInput = document.getElementById("inputValue").value;
    if (numberInput >= 1 && numberInput <= 1000000) {
        // Length conversion
        const feetNumber = 3.28084;
        const meterToFeet = numberInput * feetNumber;
        const feetToMeter = numberInput / feetNumber;
        lengthResult.textContent = `${numberInput} meters = ${meterToFeet.toFixed(3)} feet | ${numberInput} feet = ${feetToMeter.toFixed(3)} meters`;
        // Volume conversion
        const gallonNumber = 0.264172;
        const litersToGallons = numberInput * gallonNumber;
        const gallonsToLiters = numberInput / gallonNumber;
        volumeResult.textContent = `${numberInput} liters = ${litersToGallons.toFixed(3)} gallons | ${numberInput} gallons = ${gallonsToLiters.toFixed(3)} liters`;
        // Mass conversion
        const poundNumber = 2.20462;
        const kilosToPounds = numberInput * poundNumber;
        const poundsToKilos = numberInput / poundNumber;
        massResult.textContent = `${numberInput} kilos = ${kilosToPounds.toFixed(3)} pounds | ${numberInput} pounds = ${poundsToKilos.toFixed(3)} kilos`;
    }
    else {
        alert("Please enter a number between 1 and 1,000,000.");
        lengthResult.textContent = "";
        volumeResult.textContent = "";
        massResult.textContent = "";
    }
})