// *********** FOR OF LOOP **********

// const myArr = [1,2,3,4,5,6,7]

// for (const i of myArr) {
//     console.log(i);
// }

// const greeting = "Hello World"
// for (const greet of greeting) {
//     console.log(`Each char is ${greet}`);
// }


// ****************** MAPS ****************

const map = new Map()
map.set('in','india')
map.set('usa','america')
map.set('fr','france')

// // console.log(map)

// // for (const key of map) {
// //     console.log(key);
// // }

// for (const [key,values] of map) {
//     console.log(key, ":-" , values);
// }


// const myObj = {
//     'game1': 'NFS',
//     'game2': 'Spiderman'
// }

// for (const [key,value] of myObj) {
//     console.log(key,"=>", value);
// }

// const myObject = {
//     js: "Javascript",
//     py: "python",
//     cpp: "C++",
//     rb: "ruby"
// }

// for (const key in myObject) {
//     console.log(key,"=>",myObject[key]);
// }

const prog = ['js','py','java','rb','cpp']

// for (const key in prog) {
//     console.log(prog[key])
// }

// for (const key in map) {
//     console.log(key);
// }



// ****************************** FOR EACH ************************************

const coding = ['js','py','java','rb','cpp','c']

// coding.forEach(function (item){
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item)
// })

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding = [
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageFileName);
})