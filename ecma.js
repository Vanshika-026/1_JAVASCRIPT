// let firstName = "vanshika";
// let lastName = "chaudhary";
// // console.log(`${firstName}` .startsWith('v'));

// console.log(`${firstName} `.repeat(10));


// //Array-destructing
//  const myproglang = ['js' ,'php' ,'python' ,'c' ];
//  var top1 = myproglang[0];
//  var top2 = myproglang[1];
//  var top3 = myproglang[2];
// //  console.log("my favourite language is " + top3);
// console.log(myproglang.length);

// //swap
// let a = 5;
// let b = 10;
// [a, b] = [b, a]
// console.log(`the value of a is ${a} and the value of b is ${b}`)

const bioData = {
    Name : "vanshika",
    age : 21,

}
let { Name, age} = bioData;
console.log(`my name is ${Name} and my age is ${age}.`)