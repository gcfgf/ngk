import { addCart } from "./card.js"
import { moveCheckOut } from "./card.js"
const products = document.getElementById("product")

const params = new URLSearchParams(document.location.search)

const item = JSON.parse(params.get('data'))
console.log(item)