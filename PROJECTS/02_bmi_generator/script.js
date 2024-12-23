const forms = document.querySelector('form')

forms.addEventListener('submit', (e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = document.querySelector("#result")

    if(height === 0 || height < 0 || isNaN(height)){
        result.innerHTML = `<span>Enter a valid height</span>`
    }else if(weight === 0 || weight < 0 || isNaN(weight)){
        result.innerHTML = `<span>Enter a valid weight</span>`
    }else {
        const bmi = (weight / ((height**2)/10000)).toFixed()
        result.innerHTML = `<span>Your BMI is: ${bmi}</span>`
    }
})