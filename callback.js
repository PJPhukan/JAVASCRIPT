document.body.style.background="cyan"

// Synchronus -> Actions are that initiate and finished one by one.
// let a=prompt("What is your name")
// let b=prompt("What is your age")


// Asynchronus -> Actions are the actions that we initiate now and they finished later.
// setTimeout(()=>{
//     alert("Hey i am synchronus ")
// },3000)



// callback function -> A callback function is a function passed into another function as an argument ,which is then invoked inside the outer functiion to complete an action.

// function loadscript(src,callback ){
//     let script=document.createElement("script")
//     script.src=src
//     script.onload=()=>{
//         console.log("SRC Loaded");
//         callback(null,src);
//         callback();
//     }
//     script.onerror=()=>{
//         console.log("Error for loading  " + src)
//         callback(new Error("Error"))
//     }
//     document.body.appendChild(script)
// }


// function hello(error,src){
//     if(error){
//         console.log(error);
//         return
//         // console.log('Hi am Parag');
//     }
//     alert('Hi am Parag');
// }
// function goodmoring(){
//     console.log('Hey Good mornig');
// }


// loadscript("https//:google.com",goodmoring)



function loadscript(src,callback){
    let script=document.createElement("script")
    script.src=src
    script.onload=()=>{
        console.log("Hey i am onload")
        callback(null,src)
    }
    script.onerror=()=>{
        console.log("src loading    " + src)
        callback(new Error("Error for loading"),src)
    }
    document.body.appendChild(script)
}


function hello(error,src){
    if(error){
        console.log("This is an error  " +error)
        return
    }
    console.log("Hey how are you")
}

loadscript("https//:google.com",hello)