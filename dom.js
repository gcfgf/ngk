 let ngk = document.getElementsByClassName("para")
let count = 0;

function increse(){
if(count>=25)
{
    ngk[0].textContent = count
    alert("Allows Less Than 25")
}
   else {
    count++;
    ngk[0].textContent = count
    ngk[1].textContent ="incremented"

    if(count%2==0)
    {
ngk[2].textContent = "even"

    }
else{

    ngk[2].textContent ="odd"

}
   }
    
   }

function decrease(){

    if(count>0){

        count--
        ngk[0].textContent = count
        ngk[1].textContent = "decremented"

        if(count%2==0){
            ngk[2].textContent = "even"

        }
        else{
            ngk[2].textContent = "odd"
        }

    }
    else{
 
        alert("Allows Grater Than Zero")

    }
}

function reset(){
  
    let count = 0

    ngk[0].textContent = count
    ngk[1].textContent = ''
    ngk[2].textContent = ''

}
    

