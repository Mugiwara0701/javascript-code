// *************** FOR LOOP **********

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);   
// }

// for (let i = 1; i < 10; i++) {
//     console.log(`outer loop ${i}`);
//     for (let j = 1; j < 10; j++) {
//         // console.log(`inner loop value ${j} and inner loop ${i}`);
//         console.log(i + "*" + j + ' = ' + i*j);
//     }
// }

// let myArr = ['flash','batman','superman']
// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];
//     console.log(element);   
// }

// for (let index = 0; index < 20; index++) {
//     if(index === 5){
//         console.log("Detected 5");
//         break;
//     }
//     console.log(`value of i is ${index}`);
// }

for (let index = 0; index < 20; index++) {
    if(index === 5){
        console.log("Detected 5");
        continue;
    }
    console.log(`value of i is ${index}`);
}