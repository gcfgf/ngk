// debugger;
// const form = document.getElementById("fr")

// form.addEventListener("change",function(e){
// console.log(e.target.value)

// const pass = document.getElementById("password")
// const button = document.getElementById("button").addEventListener("click",function(ele){

// if(pass.type === "password"){
// pass.type ="text"
// button.innerText = "hide"
// } 
// else 
// pass.type="password"
// button.innerText = "show"

// })

// })  





// let para = document.getElementById("para")


   
//     setInterval(function(){ 
    
//         const dt = new Date().toLocaleDateString()
//         para.innerText  = dt
//         console.log(dt)
//     },1000)
    
    
// let a = [1,3,4,5,6,1,2,3,4,5]

// function duplicateElement(_arry){
// let b = []
//     _arry.forEach(value => {
//     if(!b.includes(value)){

//         b.push(value)
//     }
// })


// return b
// }
// console.log(duplicateElement(a))
// duplicateElement(a);


// function countduplicate(_arry){

//      let count = []
// _arry.forEach(value => {
//     if(!count[value]){
//         count[value] = 1;
//     }
//     else{
//         count[value]++;
//    
    
// });
// return count
// }
// const result = countduplicate(a)
// console.log(result)


const regForm = document.getElementById("regForm")
 regForm.addEventListener("submit",function formSubmit(e){

e.preventDefault()

var name = document.getElementById("name")
console.log(name)
var email = document.getElementById("email").value
console.log(email)
var password = document.getElementById("password").value
console.log(password)

console.log(e)




if(name.value === ''){

 let text =document.getElementById("error").textContent = "must and should"
document.getElementById("error").style.display = "block"

}

 


 })

