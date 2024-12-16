const user = {
    username: "akshat",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website.`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this)   // this will print empty object because we are running in node environment


// function chai(){
//     let username = "akshat"
//     console.log(this.username);
// }

// chai();


// const chai = () => {
//     let username = "akshat"
//     console.log(this);
// }

// chai()


// ***************** ARROW FUNCTION ************************

// const addTow = (num1,num2) =>{
//     return num1 + num2
// }

// const addTow = (num1,num2) => num1+num2

// const addTow = (num1,num2) => (num1+num2)

// console.log(addTow(3,3))

// const returnName = () => ({username: "akshat"})

// console.log(returnName())

// const myArr = [2,3,4,5,6]

// myArr.forEach(() =>)