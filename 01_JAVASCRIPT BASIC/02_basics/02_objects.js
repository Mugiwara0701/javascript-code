//************************** singleton ****************************************

const tinderUser = new Object()   // creating using constructor 
tinderUser.id = "001"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "akshat12@gamil.com",
    fullname:{
        userfullname: {
            firstname: "akshat",
            lastname: "nautiyal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname)

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3  = {obj1,obj2}
// const obj3 = Object.assign(obj1,obj2)
// const obj4 = Object.assign({},obj1,obj2)

// const obj4 = {...obj1,...obj2}

// console.log(obj4)

const user = [
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
    {
        id: 1,
        email: "a@gmail.com"
    },
]

// console.log(user[1].email)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) // create pairs of 

// console.log(tinderUser.hasOwnProperty('isLoggedIn'))


//**********************************  object literals *************************

const mySym = Symbol("key1")

const jUser = {
    "full name": "Akshat",
    name: "akshat nautiyal",
    age: 21,
    location: "dehradun",
    email: "askaht@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    [mySym]: "mykey1",
}

// console.log(jUser.email);
// console.log(jUser["email"]);
// console.log(jUser["full name"]);
// console.log(jUser[mySym])
// console.log(typeof jUser[mySym])

// jUser.email = "akshat12@gmail.com"
// Object.freeze(jUser)
// jUser.age = 22
// console.log(jUser)

// jUser.greeting = function(){
//     console.log("Hello JS user");
// }

// jUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(jUser.greetingTwo());


// ******************** Object Destructing and JSON API ********************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);

// const {price} = course
// console.log(price);


// const {courseInstructor} = course
const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor)

// const navbar = ({company}) =>{
    /// this is use in react
// }

// navbar(company = "akshat")


// ********************* API ****************************

// {
//     "name": "akshat",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// [
//     {},
//     {},
//     {}
// ]