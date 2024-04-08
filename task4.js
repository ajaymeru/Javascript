// Create a Simple Calculator using Conditions
// Steps :
// 1. Ask the user to enter the first number.
// 2. Ask the user to enter the operation (+, -, *, /).
// 3. Ask the user to enter the second number.
// 4. Based on the operation entered:
// 5. If it's addition (+), add the two numbers together.
// 6. If it's subtraction (-), subtract the second number from the first number.
// 7. If it's multiplication (*), multiply the two numbers together.
// 8. If it's division (/), divide the first number by the second number.
// 9. Display the result of the operation.

let num1 = parseInt(prompt("Enter your first number"));
let operator = prompt("Enter your operator ( + , - , * , / )");
let num2 = parseInt(prompt("Enter your second number "));
if (isNaN(num2 && num1))
    alert('Please Enter valid Number');
else {
    switch (operator) {
        case '+':
            console.log(parseInt(num1) + num2);
            break;
        case '-':
            console.log(parseInt(num1) - num2);
            break;
        case  '*':
            console.log(parseInt(num1)  * num2);
            break;
        case '/':
            if (num2 == 0)
                console.log('Invalid Opertion')
            else
                console.log(parseInt(num1)/num2);
            break;
        default:
            console.log('Invalid Opertor')
    }
}   