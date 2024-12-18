// const coding = ['js','py','java','rb','cpp','c']

// const values = coding.forEach((item)=>{
//     console.log(item);
// })

// console.log(values)

// const myNum = [1,2,3,4,5,6]

// const newNum = myNum.filter((num)=> num > 4)

// const newNum = myNum.filter((num) => {
//     return num > 2;
// })

// const newNum = []

// myNum.forEach((num) => {
//     if(num > 4){
//         newNum.push(num)
//     }
// })

// console.log(newNum)


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

// const userBooks = books.filter((bk) => bk.genre === 'History')

const userBooks = books.filter((bk) => {
    return bk.publish > 1990 && bk.genre === 'History'
})

// console.log(userBooks);

const myNum = [1,2,3,4,5,6,7,8,9,10]

// const newNum = myNum.map((num) => num+10);

// const newNum = myNum
//                     .map((num) => num*10)
//                     .map((num) => num + 1)
//                     .filter((num) => num >= 40);
// console.log(newNum);


// ********************** REDUCE ********************************

const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc,currval) =>{
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc + currval
},1)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "java course",
        price: 199
    },
    {
        itemName: "python course",
        price: 399
    },
    {
        itemName: "C++ course",
        price: 299
    },
]

const priceToPay = shoppingCart.reduce((acc,item)=>{
    return acc + item.price
},0)

console.log(priceToPay);
