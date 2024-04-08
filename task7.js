// Write a program that uses a loop to print a multiplication table for a given Number up to a certain range.

// Steps :
// Step 1: Choose a number you want to create a multiplication table.
// Step 2: Start counting from 1 up to a certain range (e.g., 10).
// Step 3: For each number in the range, multiply it by the chosen number and write down the result.
// Step 4: Repeat this process until you reach the desired range.

// Example : Given Number is 5 
// 5 * 1 = 5
// 5 * 2 = 10
// 5 * 3 = 15
// 5 * 4 = 20
// 5 * 5= 25
// 5 * 6 = 30
// 5 * 7 = 35
// 5 * 8 = 40
// 5 * 9 = 45
// 5 * 10 = 50

function  multiplicationTable(table, range){
    for(let i=1; i<=range; i++){
        console.log(table+"*"+i+"="+(table*i));
    }
}
multiplicationTable(5, 15);