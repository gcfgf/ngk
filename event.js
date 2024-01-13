/* capturing top down */
// const ggp = document.querySelector(".ggp");
// const gp = document.querySelector(".gp");
// const p = document.querySelector(".p");
// const c = document.querySelector(".c");

// ggp.addEventListener("click",function(){
//    alert('grate grand parent ') 
// },true)
// gp.addEventListener("click",function(){
//     alert(' grand parent ') 
//  },true)
//  p.addEventListener("click",function(){
//    alert('parent') 
//  },true)
//  c.addEventListener("click",function(){
//     alert('child ') 
//  },true)
 
// const btn = document.getElementById("btn")
// btn.addEventListener("click",function(e){
//    console.log(e)
//    alert("button")
// },true)
 
/** event propagation is two types 
 * 1. bubbling(defaul)... child to parent...
 * 2. capturing ... parent to child top down
*/

const button = document.querySelector(".buttons")

button.addEventListener("click",function(e){
if(e.target.tagName ==="BUTTON"){
   console.log(e.target.innerText)
}

})

/**event dedication
 *is instead of writting event for one by one button using taking direct parrent element and targeted the value and print the innertext
 */