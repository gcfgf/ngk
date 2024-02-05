

async function fetchData(){

    try{
        const res = await fetch("https://dummyjson.com/products")
    
        
        if(res.ok){
            const data = await res.json()
            console.log(data.products)
            displayData(data.products)
        }
        else{
            console.log("fetch not done")
        }
       
    }
   catch(err) {
console.log(err)

   }


}
fetchData()
const mainDiv = document.getElementById("products")
const cartcount = document.getElementById("count")
let cart = [];
function displayData(data){


    console.log(data)

    data.forEach((data)=>{
        const div = document.createElement("Div")
        div.classList.add("product")
        const img = document.createElement("img")
        img.src = data.thumbnail
        const title = document.createElement("h2")
        title.textContent= data.title
        const price = document.createElement("price")
        price.textContent = "$" + data.price
        const cart_button = document.createElement('button');
        cart_button.textContent = "Add to Cart"
        // const product_button = document.createElement("button")
		// product_button.textContent = "Add to Cart"
        cart_button.setAttribute('cart_product',JSON.stringify(data))
        cart_button.addEventListener('click', addCart) 
        div.append(img,title,price,cart_button)
        mainDiv.appendChild(div)
        
        }) 
              
}
function addCart(){

    const newData = JSON.parse(event.target.getAttribute('cart_product'))
    console.log(newData)
    cart.push(newData)
    cartcount.innerText = cart.length
    
    }
  const cart_button = document.getElementById("cart-button")   
  
  cart_button.addEventListener("click",moveCheckOut)

function moveCheckOut(){

    localStorage.setItem("cardDetails",JSON.stringify(cart))
    window.location.href = "./checkout.html"

}




