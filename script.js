
let weight = document.getElementById("weight");
let height = document.getElementById("height");
let btn = document.getElementById("btn");
let result = document.getElementById("result");

btn.addEventListener("click", () => {
    let w = parseFloat(weight.value);
    let h = parseFloat(height.value);

    if(!w || !h){
        result.textContent = "Please enter valid weight and height!";
        result.className = "";
        return;
    }

    let bmi = w / (h * h);
    bmi = bmi.toFixed(2);

    if(bmi < 18.5){
        result.textContent = `BMI: ${bmi} — Underweight`;
        result.className = "underweight";
    }
    else if(bmi >= 18.5 && bmi <= 24.9){
        result.textContent = `BMI: ${bmi} — Normal weight`;
        result.className = "normal";
    }
    else if(bmi >= 25 && bmi <= 29.9){
        result.textContent = `BMI: ${bmi} — Overweight`;
        result.className = "overweight";
    }
    else {
        result.textContent = `BMI: ${bmi} — Obese`;
        result.className = "obese";
    }
});
