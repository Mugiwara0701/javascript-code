// ********** IF STATEMENT ********************

// if(true){ // this will execute
//     console.log()
// }

// if(false){  //this will not execute
//     console.log()
// }

// const isUserLoggedIn = true
// const temp = 41

// if(temp<50){
//     console.log("less than 50")
// }else{
//     console.log("temp is greater than 50")
// }

// const score = 200

// if (score>100){
//     let power = "fly"
//     console.log(`user power: ${power}`)
// }
// console.log(`user power: ${power}`)

const balance = 1000

// if(balance > 500) console.log("test")

// if(balance < 500){
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750");
// } else if (balance < 900){
//     console.log("less than 900");
// } else {
//     console.log("greater than 900");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3){
    console.log("allow to buy courses");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
}