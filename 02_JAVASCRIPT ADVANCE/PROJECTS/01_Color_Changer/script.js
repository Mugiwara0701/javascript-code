const buttons = document.querySelectorAll(".button")
// console.log(buttons);

const body = document.querySelector("body")

buttons.forEach((button)=>{
    console.log(button)
    button.addEventListener('click', (e)=>{
        // console.log(e);
        const color = e.target.id
        body.style.backgroundColor = color
    })
})


// we can use if else and switch also