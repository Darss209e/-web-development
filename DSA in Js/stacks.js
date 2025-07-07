// var letters = [];
// var word = "racecar";
// var rword = "";


// for (let i = 0; i < word.length; i++) {
//     letters.push(word[i]);

// }


// for (let i = 0; i < word.length; i++) {
//     rword += letters.pop();

// }

// if (rword === word) {
//     console.log(word +" is a palindrome");
// }
// else{
//     console.log(word+ "is not a palindrome");
// }

var stack = function () {

    this.count = 0;
    this.storage = {};

    // add a value onto the end of the stack
    this.push = function (value) {
        this.storage[this.count] = value;
        this.count++;
    }

    // remove and return the value at the end of the stack 
    this.pop = function () {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }
    this.size = function () {
        return this.count;
    }

    // return the value at the end of the stack 
    this.peek = function () {
        return this.storage[this.count - 1];

    }

}


var mystack = new stack();
mystack.push(1);
mystack.push(2);
console.log(mystack.peek());
console.log(mystack.pop());
console.log(mystack.peek());
mystack.push("freecodedarsh");
console.log(mystack.size());
console.log(mystack.peek());
console.log(mystack.pop());
console.log(mystack.peek());

