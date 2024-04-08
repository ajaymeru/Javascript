// Write a program that uses a loop to calculate and display the factorial of a given number.

// Steps:
// 1. We first define the given number as givenNumber.
// 2. Then, we initialize the factorial variable to 1.
// 3. Next, we use for loop to iterate from the givenNumber down to 1.
// 4. each iteration, we multiply the factorial by the current value of i.
// 5. After the loop, the factorial variable holds the calculated factorial value.
// 6. Finally, we display the calculated factorial value using console.log( ).

// Example : Given number is 5;   
//                          5*4*3*2*1 = 120

function factorial(number){
    let  fact = 1;
    for (let i=number; i>=1; i--) {
        fact *= i;
    }
    console.log(fact)
}
factorial(5)
