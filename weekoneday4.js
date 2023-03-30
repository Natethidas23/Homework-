//What is the technical term used to create a variable in JavaScript?
// Print this term to the console as a string.


function countOddNumbers(arr){
    let count = 0;
for(let i = 0;i<arr.length; i++){
    if(arr[i]%2!==0){
        count--;
    }
}
return count;
}
const arr = [1,2,3,4,5];
const oddNumbers = countOddNumbers(arr); 

console.log({oddNumbers});  




console.log("const,let");

//What is the technical term used to call or execute a function in JavaScript?
// Print this term to the console as a string.

console.log("The technical term used to call a function is call()");


//Create an object called student, including 3 properties with their values.

const jake = {
    firstName: "Jake",
    lastName: "son",
    age:20,
    eyeColor:"brown"
};

console.log(jake.firstName);

//Create a function that removes the first element of the
// array below and adds “kiwi” to the end of the array.

const fruits =["Apples","Bananas","Orange"];
fruits.shift();
fruits.push('kiwi');
console.log(fruits);


//update the sentence I love chocolate cake all to upper case


const sentence = "i love chocolate cake";
const upperCase1 = sentence.toUpperCase();
console.log(upperCase1);











// const upperCaseCake = "I love chocolate cake";
// const upperCase = upperCaseCake.toUpperCase();
// console.log(upperCase);