// Write a program that uses a loop to calculate and display the sum of all numbers from 1 to 10.
// Steps :

// 1. Start with a variable sum set to 0.
// 2. Start a loop from 1 to 10.
// 3. Add the current loop variable to sum.
// 4. After the loop, sum will hold the sum of all numbers from 1 to 10.
// 5. Display the sum in the format "1+2+3+...+10 = sum".


function number(still) {
    let sum = 0; 
    for (let i = 1; i <= still; i++) {
      sum += i;
      console.log(sum);
    }
  }
  
  number(10);

