const input = document.getElementById("inp")
const button = document.getElementById("btn")
const mainDiv = document.getElementById("results")

button.addEventListener("click", fetchData)
     

function fetchData(){
    const searchTerm = input.value
fetch(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)
.then(function(v1){
    return v1.jason()

}).then(function(data){

console.log(data)

dataFetch(data)

}).then(function(err){
    console.log(" My errors is " + err)
})

function dataFetch(data){

const img = document.createElement("img")
img.src = data.picture
img.alt = data.title
mainDiv.appendChild(img)

}

}

