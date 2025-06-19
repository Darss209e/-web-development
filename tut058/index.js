function place(name) {
    console.log("hi "+name+" is a good boy");
console.log("hi "+name+" is a nice boy");
console.log("hi "+name+" is a fuck boy");
console.log("hi "+name+" is a dad boy");
    
}

place("aasif");

// console.log("hi darsh is a good boy");
// console.log("hi darsh is a nice boy");
// console.log("hi darsh is a fuck boy");
// console.log("hi darsh is a dad boy");

function sum(a ,b,c=2) {
    // console.log(a+b)
    return a+b+c;
    
}
result1=sum(4,9);
result2=sum(7,9);
result3=sum(9,9,7);

console.log("the sum of these numbers is :",result1);
console.log("the sum of these numbers is :",result2);
console.log("the sum of these numbers is :",result3);

const func1=(x)=>{
    console.log("i am an arrow fuction :",x);
}
func1(24);