const myArr = [1,2,3,4,5]
// console.log(myArr[0]);

const myNum = new Array(1,2,3,4,6)
// console.log(myNum);

// ********************* ARRAY METHODS ************************

// myArr.push(6) // add new element in array at the end
// myArr.push(7) // add new element in array at the end
// myArr.pop() // remove last element

// myArr.unshift(9) // insert element at first position and shift all other element
// myArr.shift()  // remove first element and shift other 

// console.log(myArr.includes(9));  // check if element present or not
// console.log(myArr.indexOf(3));  // return index of element
// console.log(myArr);

// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

// const myn1 = myArr.slice(1,3)
// console.log("A " + myArr);
// console.log(myn1);
// console.log("B " + myArr);

// const myn2 = myArr.splice(1,3)
// console.log(myn2);
// console.log("C " + myArr);

const m_hero = ['i','t','s']
const dc_heros = ['superman','batman','joker']

// m_hero.push(dc_heros)

// console.log(m_hero);
// console.log(m_hero[3][2]);

// const anotherHero = m_hero.concat(dc_heros)

// console.log(anotherHero);

const all_newheros = [...m_hero,...dc_heros]
// console.log(all_newheros);

// const anotherArr = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const flatArry = anotherArr.flat(Infinity)
// console.log(flatArry);

console.log(Array.isArray("AKshat"));
console.log(Array.from("AKShat"));
console.log(Array.from({name: "akshat"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));



