let random = Math.random()
console.log(random)

let a =("enter your number")
let b=("enter operation")
let c=("enter second number")


let opr ={
    "+" : "-",
    "-" : "*",
    "*" : "/",
    "/" : "*",

}


if (random > 0.1) {
    console.log(`the result is ${a} ${b} ${c}`)
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}


else{
    b= opr[b];
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}
