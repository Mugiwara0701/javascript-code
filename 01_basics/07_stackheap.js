// ************************ STACK ************************************

let name = "Akshat"
let anotherName = name;

anotherName = "AKshatNautiyal";

console.log(name);
console.log(anotherName);

//************************* HEAP **************************************

let userOne = {
    email: "akshat@gmail.com",
    upi: "1ow2ie@upi",
}

let userTwo = userOne;
userTwo.email = "nautiyal@gmail.com"

console.log(userOne);
console.log(userTwo)