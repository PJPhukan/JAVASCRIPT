// document.body.style.background="red"
// let a=document.getElementsByClassName("container")[0]
// a.onclick=()=>{
//     let b=document.getElementsByClassName("container")[0]
//    b.innerHTML="Hey i am inside the onclick function"
// }
// let c=document.getElementById("secondcontainer")
// c.onmouseenter=()=>{
//    let d=document.getElementById("secondcontainer")
//     d.innerHTML="Hey goos morning"
// }

let n=prompt("Enter your choice")

let x=document.getElementById("add")

let a=function(e){
    console.log(e.type2 , e.clientY ,e.clientX)
    alert("Hello world")
   }
   let b=function(){
       // alert("Hello world")
       alert("Hello world2")
    }
x.addEventListener('click',a)
x.addEventListener('click',b)
if(n=='2'){
    x.removeEventListener('click',b)
}