// ******************* FUNCTIONS ***********************************

// function sayMyName(){
//     console.log("A");
//     console.log("K");
//     console.log("S");
//     console.log("H");
//     console.log("A");
//     console.log("T");
// }

// sayMyName();

// function addTwoNumber(num1,num2){
//     console.log(num1+num2)
// }

// addTwoNumber(10,20)

function addTwoNumber(num1,num2){
    return num1+num2
}

const result = addTwoNumber(10,20)
// console.log(result);


// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter username")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())

// function loginUserMessage(username = "sam"){  //default value
//     if(!username){
//         console.log("please enter username")
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage())

function calculateCartPrice(...num1){ 
    return num1
}

// console.log(calculateCartPrice(200,300,400))

const user = {
    username: "akshat",
    price: 199,
}

function handleObject(anyObject){
    console.log(`User is ${anyObject.username} and price is ${anyObject.price}`)
}

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })


const myNewArr = [200,300,400]

function returnSecondValue(getArr){
    return getArr[1]
}

console.log(returnSecondValue(myNewArr))