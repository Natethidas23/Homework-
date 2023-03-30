//Write a function that multiplies two numbers. Invoke the function.
//2. Write a function named assignGrade, that takes one argument, a number score (example: 90).
//Return a grade for the score, either “A,” “B,” “C,” “D,” or “F.”
//Invoke that function for a few different scores and log the result to make sure it works for each case.
//3. Write an array containing items of the same data type.
//4. Write a function to get the first element in an array. Invoke the function

let result = (5 * 7)
console.log(result);
//
function assignGrade(score) {
    //if the score is then greater than 
    //or equal to 90 return an A
    if (score >= 90) {
        console.log("A")
    }
    else if (score >= 80) {
        console.log("B")
    }
    else if (score >= 70) {
        console.log("C")
    }
    else if (score >= 60) {
        console.log("D")
    }
    else {
        console.log("anything else F")
    }

}
assignGrade(92)