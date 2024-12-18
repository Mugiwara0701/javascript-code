let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());

// let myCreatedDate = new Date(2025,0,7);
// console.log(myCreatedDate.toString());

// let myCreatedDate = new Date("2024-12-16")
// let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMilliseconds());
// console.log(newDate.getDate());
// console.log(newDate.getHours());
// console.log(newDate.getMonth()+1); // month starts from 0 in case of new Date

newDate.toLocaleString('default',{
    weekday: "long",
    dateStyle: "full"
})