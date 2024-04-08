// let a = 10;
// let b = 20;

// console.log(a, b);
// a = a + b;

// b = a - b;

// a = a - b;
// console.log(a, b); 
// a += a;
// b += b;
// console.log(a, b);

function numbers(a, b) {
    console.log(a, b);

    a = a + b;
    b = a - b;
    a = a - b;

    console.log(a, b);

    a += a;
    b += b;

    console.log(a, b);
}
numbers(10, 20);


