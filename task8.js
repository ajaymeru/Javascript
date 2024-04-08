// Write a program that uses a loop to find and display the common elements between two arrays of integers.

// Steps:
// Step 1: Imagine you have two lists of numbers.
// Step 2: Pick a number from the first list.
// Step 3: Look at each number in the second list to see if it matches the number you picked.
// Step 4: If you find a match, it means the number is common to both lists.
// Step 5: Repeat steps 2-4 for each number in the first list.
// Step 6: Once you've checked all numbers in the first list, you've found all the common elements.
// Step 7: Display the common elements you found.

// const list1 = [1, 2, 3, 4, 5];
// const list2 = [3, 4, 5, 6, 7];

// const commonElements = [];

// for (let i = 0; i < list1.length; i++) {
//     const number = list1[i];
    
//     for (let j = 0; j < list2.length; j++) {
//         if (number === list2[j]) {
//             commonElements.push(number);
//             break;
//         }
//     }
// }

// console.log(commonElements);

function findCommonElements(list1, list2) {
    const commonElements = [];

    for (let i = 0; i < list1.length; i++) {
        const number = list1[i];
        
        for (let j = 0; j < list2.length; j++) {
            if (number === list2[j]) {
                commonElements.push(number);
                break;
            }
        }
    }

    return commonElements;
}

const list1 = [1, 2, 3, 4, 5];
const list2 = [3, 4, 5, 6, 7];

console.log(findCommonElements(list1, list2)); 
