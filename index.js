// Shift + Ctrl + I    //console open
// No need to Write Script Tag Here, Just Write Formally

// ***************  Scripting Language  *********************

// 1. Ways to Print JS
// console.log("Hello World ")                  // Printing on Console 
// alert("me")                                 // popUp Alert Button
// document.write("This is my document ")     // Document insert text 



// 2. JavaScript Console Api 
console.log("Hello World, ", 4 + 4, "Eigth");
console.warn("This is a Warning");
console.error("This is an Error ");
// console.assert(4 + 4 = 8);



//3. DataType in JavaScript  
// i. Variable 
var num1 = 23;
var num2 = 24;
console.log(num1 + num2)   // printing on Console 


// ii. String 
var name1 = " This is Muhammad"    // String // Number // Float // double 
var name2 = "  Rameez "    
var double = 3.01
console.log(name1   + name2 + double)


// iii. Objects 
var marks = {         // Key value Pairs 
    rameez : 1010,
    ali: 1000,
    haris : 654.23
}
console.log(marks , name1)



// Undefined Values
var und;
var und1 = undefined
var und2 = null
console.log(und,und1,und2)



// 4. Arrays in JAvaScript
var arr = [10,20.3,"Rameez ;)",40]
console.log(arr[1], arr[2],arr[0])
console.log(arr)




// 5. Operator in JS
// i. Arthimetic Operator 
var a = 40
var b = 20

console.log("The Sum of " + a + " and " + b + " is " + (a+b))
console.log("The Diffrence of " + a + " and " + b + " is " + (a-b))
console.log("The Product of " + a + " and " + b + " is " + (a*b))
console.log("The Division of " + a + " and " + b + " is " + (a/b))
console.log("The Remainder of " + a + " and " + b + " is " + (a%b))


// ii. Assignment Operator 
var c = 500

console.log(c)
console.log(c+=100)         // c = c + 100
console.log(c-=100)
console.log(c/=100)
console.log(c*=100)
console.log(c%=100)


// iii. Comparision Operator 
console.log(a == b)
console.log(a <= b)
console.log(a >= b)
console.log(a > b)
console.log(a < b)


// iv. Logical Operator 
console.log( "The and operation shows ",a==40  && b==20 )


//6. If and Else in Js 
var age = 23
if ( age > 20 ){
    console.log("You are an Adult ")
}
else if ( age < 20 ){
    console.log("You are an Under Ager")
}
else 
console.log("You are 20 Year Old ")



// Loops in JavaScript
// i. for loop
var arr = [0,1,2,3,4,5]
console.log(arr.length)
for (var i = 0 ; i <= arr.length ; i++){
    console.log(arr[i]+1)
}


// ii. for each loop
arr.forEach(function(element){
    console.log(element+2)
})




let Arrays = ["Rameez",923,"234",234.23]
Arrays.forEach(function (ele){
    console.log(ele+2)
    // console.log(Arrays.shift())
})

// This is Incomplete tutorial of Js however Html is Totally Covered  ------ JS Tutorial will be Upload Soon 