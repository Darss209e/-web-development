let random = Math.random()
console.log(random)

let a = prompt("enter your number")
let b = prompt("enter operation")
let c = prompt("enter second number")


let opr = {
    "+": "-",
    "-": "*",
    "*": "/",
    "/": "*",
}


if (random > 0.1) {
    // console.log(`the result is ${a} ${b} ${c}`)
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}


else {
    b = opr[b];
    alert(`the result is ${eval(`${a} ${b} ${c}`)}`)
}
