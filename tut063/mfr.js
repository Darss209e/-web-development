let arr = [1,3,5,11,9]

// let newarr=[] 

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2)

// }

let newarr=arr.map((e)=>{
    return e**2
})

console.log(newarr)

const greaterthanseven = (e)=>{

    if (e>7) {
        return true
        
    }
    return false;
}

console.log(arr.filter(greaterthanseven));

let arr2 =[1,4,5,2,6,7,3]

const red =(a,b)=>{
    return a*b;
}
console.log(arr2.reduce(red));