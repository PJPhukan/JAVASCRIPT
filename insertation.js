document.body.style.background="red"
let a=document.getElementById("first")
// a.innerHTML=a.innerHTML+"<h1>hey i am parag</h1>"
let di=document.createElement('div')
di.innerHTML="<h1>Hey I am Parag</h1>"
// a.append(di)
// a.prepend(di)
// a.before(di)
// a.after(di)
a.replaceChild(di)
