// ********* IIFE - Immediately Invoked Function Expression *************

(function chai(){
    console.log('DB CONNECTED')
})();

(() => {
    console.log('DB CONNECTED TWO')
})();

((name) => {
    console.log(`DB CONNECTED THREE ${name}`)
})('akshat');