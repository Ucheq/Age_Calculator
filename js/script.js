"Use strict"
// For Output
const year_output = document.querySelector(".year-output");
const month_output = document.querySelector(".month-output");
const day_output = document.querySelector(".day-output");
const submit_btn = document.querySelector(".btn");

// For Input
let ifValid = false;
const day_input = document.querySelector("#day");
const month_input = document.querySelector("#month");
const year_input = document.querySelector("#year");

// For Error messages
const year_error = document.querySelector(".year-error");
const month_error = document.querySelector(".month-error");
const day_error = document.querySelector(".day-error");

// Event Listener for Submit button
submit_btn.addEventListener('click', CalculateAge);

// Event Listener for Inputs
day_input.addEventListener('input', (e) => {
    if (+day_input.value > 31) {
        day_error.textContent = "Must be a valid date";
        ifValid = false;
        return;
    }
    else {
        ifValid = true;
    }
    if (+day_input.value === 0) {
        ifValid = false;
        day_error.textContent = "This field is required";
        ifValid = false;
        return;
      } 
      else {
        day_error.textContent = "";
    }
})
month_input.addEventListener('input', (e) => {
    if (+month_input.value > 12) {
        month_error.textContent = "Must be a valid month";
        ifValid = false;
        return;
    }
    else {
        ifValid = true;
    }
    if (+month_input.value === 0) {
        ifValid = false;
        month_error.textContent = "This field is required";
        ifValid = false;
        return;
      } 
      else {
        month_error.textContent = "";
    }
})
year_input.addEventListener('input', (e) => {
    if (+year_input.value > 2023) {
        year_error.textContent = "Must be a valid year";
        ifValid = false;
        return;
    }
    else {
        ifValid = true;
    }
    if (+year_input.value === 0) {
        ifValid = false;
        year_error.textContent = "This field is required";
        ifValid = false;
        return;
      } 
      else {
        year_error.textContent = "";
    }
})

function CalculateAge() {
    if (ifValid) {
    let birthDate = `${month_input.value}/${day_input.value}/${year_input.value}`;
    let birthday = new Date(birthDate);
    let birthDiffMill = Date.now() - birthday;
    let ageDate = new Date(birthDiffMill);
    let ageYears = ageDate.getUTCFullYear() - 1970;
    let ageMonth = ageDate.getUTCMonth();
    let ageDay = ageDate.getUTCDay() - 1;
    
    day_output.textContent = ageDay;
    month_output.textContent = ageMonth;
    year_output.textContent = ageYears;
    
    localStorage.setItem ('ageYears', ageYears);
    localStorage.setItem ('ageMonth', ageMonth);
    localStorage.setItem ('ageDay', ageDay);
    }
    else {
        alert('error');
    }
}




