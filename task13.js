// Write a code on Fibonacci Series using Function.

// Steps:
// Step 1: Begin with two numbers, 0 and 1, which are the starting numbers of the Fibonacci sequence.
// Step 2: Print the first number, which is 0.
// Step 3: Repeat the following steps for the desired number of terms:
// Step 3.1: Add the two previous numbers to get the next number in the sequence.
// Step 3.2: Update the first number to the second number's value.
// Step 3.3: Update the second number to the newly calculated number.
// Step 3.4: Print the updated first number, which is the next number in the Fibonacci sequence.
 
function Fibonacci(n){
    let num1 = 0;
    let num2 = 1;
    
    console.log("Fibonacci series up to " + n + " terms:");
    while (n-- > 0) {
        console.log(num1);
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
}

Fibonacci(10);

