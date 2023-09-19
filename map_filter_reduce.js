let arr = [6,5,4,3,2,1]
let a=arr.map((value)=>{
    return value*value
})
// console.log(a);


let a1=arr.filter((value)=>{
    return value>3
})
// console.log(a1);


let a3=arr.reduce((value,value1)=>{
    return value +value1
})
// console.log(a3);
