console.log('This is a array through looping file');
let arr=[1,4,6,7,8,5]

const arr1={
    parag:48,
    jyoti:99
}

//This is the normal from of for loop
// for (let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
// }

//Using forEach loop
// arr.forEach((e)=>{
//     console.log(e);
// })

//for of loop
for(let i of arr){  
    console.log(i);
}
for(let item in arr){
    console.log(item);
}
for(let j in arr1){
    console.log(arr1[j]);
}


// let a="parag"
// let arr1=Array.from(a)
// arr1.forEach((element) => {
//     console.log(element);
// });