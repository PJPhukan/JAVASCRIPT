/*
let promise= new Promise((resolve, reject) => {
    // console.log("This is inside the promise")
       alert("This is inside the promise")
    resolve(58)
})

console.log('Hello one');
setTimeout(function () {
    console.log("This is inside the settimeout,hello two")
},2000)
console.log('Hello three');
console.log(Promise)

*/
let p1 = new Promise((resolve, reject) => {
    console.log('Promise is pending');
    setTimeout(() => {
        console.log("I am a promise and i am fullfilled")
        resolve(true)
    }, 4000)
})
console.log(p1);
let p2 = new Promise((resolve, reject) => {
    console.log('Promise is pending');
    setTimeout(() => {
        console.log("I am a promise and i am rejected")
        reject(new Error("I am an error"))
    }, 4000)
})
console.log(p2);
p1.then((value) => {
    console.log(value);
})
p2.catch((error) => {
    console.log("Some error occured in p2")
})


/**/ 

let p3 = new Promise((resolve, reject) => {
    console.log('Promise is pending');
    setTimeout(() => {
        console.log("I am a promise and i am rejected")
        reject(new Error("I am an error"))
    }, 4000)
})
p3.then((value) => {
    console.log(value);
}, (error) => {
    console.log(error)
})
/**/