let a=100
let b='100'
console.log(a==b)
console.log(a===b)

const numberone =[1,2,3];
const numbertwo =[4,5,6];
const numbercombined=[...numberone,...numbertwo]
console.log(numbercombined)

var c=10
function add(){
    var d=10
    var e=30
    var f=d+e
    return f
}
var addresult= add()
console.log(addresult)
console.log(c)

// 5.
function sayhallo(){
    return "hello"
}
function greeting(hellomsg, name){
console.log(hellomsg()+name)
}
greeting(sayhallo, " javascript!")

// 6
function makeadder(x){
    return function(y){
        return x+y
    }
}
const added=makeadder(5)
console.log(added(2))

// 7
const person={
    fullname:function(){
        return this.firstname +" "+ this.lastname
    }
}
const person1={
    firstname:"marry",
    lastname:"doe"
}
console.log(person.fullname.call(person1))

// 
const myself={
    fullname:function(){
        return this.firstname +" "+ this.lastname
    }
}
const myself1={
    firstname:"Aparna",
    lastname:"Vairagade"
}
console.log(person.fullname.apply(person1))

// 
const hername={
    firstname:"merry",
    lastname:"doe",
    fullname:function(){
        return this.firstname +" "+ this.lastname
    }
}
const hername1={
    firstname:"Aparna",
    lastname:"Vairagade"
}
console.log(hername.fullname.bind(hername1))

