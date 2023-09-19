let a=document.querySelectorAll(".time")[0]
// a.style.background="red"
let dt=new Date()
setInterval(() => {
    a.innerHTML=new Date()
}, 1000);