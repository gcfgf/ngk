
// debugger;
const mainDiv = document.getElementById('mainDiv')
const cardDiv = document.getElementsByClassName('cardData')


fetch("https://fakestoreapi.com/products").then(function(res){

console.log(res)
return res.json()

}).then(function(data){

    console.log(data)
value = data;

value.forEach(val => {

    const img = document.createElement('img')

    img.src = val.image
    img.alt = val.category
    img.style.height = "100px"
    img.style.width = "100px"
    const para = document.createElement('p')
    para.textContent = val.price
    const button = document.createElement("button")
    button.innerText = "add card"
    button.type = "button"
    button.classList.add('btn')
    const title = document.createElement('h5')
    title.textContent = val.title
    const div =document.createElement('Div')
   div.classList.add('main')
   div.appendChild(title)
   div.appendChild(img)
   div.appendChild(para)
   div.appendChild(button)
 mainDiv.appendChild(div)
    
function addCard(img,price){
console.log("image :" + img)
console.log("price :" + price)
// let img = document.createElement('img')
// img.setAttribute("src",img)
// img.src = val.image
// img.alt = val.category
// img.style.height = "100px"
// img.style.width = "100px"
// let para = document.createElement('p')
// let paratext = document.createTextNode(price);
// para.textContent = val.price



cardDiv.appendChild(img)
// cardDiv.appendChild(p)


}


button.addEventListener('click',()=>addCard(val.image,val.price))


      

 
    })

    
})

    







