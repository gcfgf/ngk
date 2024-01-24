// /* inheritance is parent class properties will user in child class as properties  */
// /* this is parent class*/
// class Employee{

//     name;age;salary;
    
//     constructor(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
    
//     }
//      nag (){
//     console.log(this.name,this.age,this.salary)
    
//      }
    
    
//     }

// /*this is child class we can use parent properties in child calass as properties*/

// class child extends Employee{

// isgood;
// constructor(n,a,s,g){

// super(n,a,s)
// this.isgood = g ? 'good' : 'Bad';


// }

// promote(){

//     console.log(this.name + "is promoted" + this.isgood )
// }


// }

// let emp = new child("nagendra",23,50000,false)
// emp.promote()


// class Human {

//     name;age;

// constructor(name,age){

//     this.name = name;
//     this.age = age;
// }
// walk(){

//    console.log(this.name + "is walking") 
// }
// run(){
//     console.log(this.name+"is running")
// }


// }

// class SuperHuman extends Human{

// speed;
// constructor(name,age,speed)
// {
//     super(name,age)

//         this.speed = speed
//     }
// fly(){

//     console.log(this.name + "is fliying with speed" + this.speed)
// }

// }

// let obj1 = new SuperHuman("nagendra",23,5000)
// obj1.walk(), obj1.run(), obj1.fly()
// <------------------------------------------------------------------------------------------------------------>

// var a = 5
// let b = 20

// function fun(){

//     let c=30
//     console.log(this)   //it  will print first outside function value becouse this function is inside global window object
// }
// fun()

// let obj = {

// name:"nagendra",
// age : 23,
// print : function (){
// console.log("hello")
// console.log(this)

// }

// }
// obj.print()
// obj.fun()


let Employee = {

    name: "nagendra",
    age:23,
    salary :50000,
  print : function(){
    console.log(this)
  }

}

function display(a,b){

    console.log(this.name ,a,b)
}
Employee.print()
display.call(Employee,2,3)
display.apply(Employee,[2,3])
