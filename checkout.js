let details = JSON.parse(localStorage.getItem("cardDetails"))
console.log(details)

const mainDiv = document.getElementById('products')
function fetchData(){

    details.forEach((pro,index)=>{
   
        const div= document.createElement('Div')
        div.classList.add('product')
        const img = document.createElement("img") 
        img.src = pro.thumbnail
        const title = document.createElement('h2')
        title.textContent = pro.title
        const price = document.createElement('p')
        price.innerText = "$" + pro.price
        const dlte = document.createElement('button')
        dlte.textContent = "delete"
        dlte.setAttribute("data_pro",JSON.stringify(index))
        dlte.addEventListener('click',deleteItem)
     div.append(title,img,price,dlte)
    mainDiv.appendChild(div)

    })

}

fetchData()

document.getElementById('total').textContent = details.reduce((sum,v)=>{

    return v.price + sum
    
},0)


function deleteItem(){
let item = JSON.parse(event.target.getAttribute('data_pro'))
details.splice(item,1)
fetchData()
}
