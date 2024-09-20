
// Remove elements: You can use splice() to remove elements from the array.
// const arr = ['a','b','c','d'];
// arr.splice(1, 2); // Removes 2 elements starting from index 1
// console.log(arr); // Output: ['a', 'd']

// Add elements: You can add elements by setting deleteCount to 0.
// const arr = ['a','b'];
// arr.splice(2,0,'c','d')
// console.log("Array is: ",arr); //[ 'a', 'b', 'c', 'd' ]
// arr.splice(1,0,'c','d')
// console.log("Array is: ",arr); //[ 'a', 'c', 'd', 'b' ]

// Replace elements: You can also replace elements by specifying both deleteCount and new items.
// const arr = ['a','x','y','d'];
// arr.splice(1,2,'b','c') // Replaces 'x' and 'y' with 'b' and 'c'
// console.log(arr); //[ 'a', 'b', 'c', 'd' ]


// Removing items
// let fruits = ['apple', 'banana', 'cherry', 'date'];
// let removeItems = fruits.splice(1,2)
// console.log("Removed items",removeItems); //[ 'banana', 'cherry' ]
// console.log("fruits: ",fruits) // [ 'apple', 'date' ]


//Adding items:
fruits = ['apple','date'];
fruits.splice(2,0,'cherry','banana');
console.log("Fruits: ",fruits) // [ 'apple', 'date', 'cherry', 'banana' ]