// let a = 300

// if(true){
//     let a = 10
//     const b = 20
//     // var c = 30
//     console.log("inner " +a)
// }

// console.log(a)    // show error not defined
// console.log(b)    // show error not defined
// console.log(c)    // this will run because var is block scope problem

// console.log("outer " +a)


function one(){
    const username = "akshat"
    function two(){
        const website = "youtube"
        console.log(username)
    }
    //console.log(website)
    two()
}

// one()


if (true) {
    const username = "akshat"
    if (username === "akshat") {
        const website = " youtube"
        console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);


// *************************************************************************

console.log(addone(5))  // this will work properly
function addone(num){
return num + 1
}


console.log(addTwo(5))    // problem of hoisting where function can't use before initializing
const addTwo = function(num){   // some time this is called expression
    return num  + 2
}

