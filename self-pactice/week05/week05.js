// 1.Write a function addProperty(obj, key, value) that adds a new
// property to an object and returns the updated object.

function addProperty(obj, key, value) {
  obj[key] = value; 
  return obj;  
}

console.log(addProperty({ name: 'John' }, 'age', 25))
// { name: 'John', age: 25 }
console.log(addProperty({}, 'city', 'New York'))
// { city: 'New York' }


//2.Write a function mergeObject(obj1, obj2) and return merges two objects.

function mergeObject(obj1, obj2) {
  return { ...obj1, ...obj2 };
}

console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' }))
//{ name: 'John', age: 25, city: 'New York' }
console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' }))
//{ name: 'Jane', age: 30, country: 'USA' }


// 3.Write a function convertToUppercase(arr) that takes an array of
// strings and returns a new array with all strings converted to uppercase.

function convertToUppercase(arr) {
  return arr.map(str => str.toUpperCase());
}

console.log(convertToUppercase(['hello', 'world']));
// ['HELLO', 'WORLD']

console.log(convertToUppercase(['javascript', 'is', 'fun']));
// ['JAVASCRIPT', 'IS', 'FUN']

// 4.Write a function filterEvenNumbers(arr) that takes an array of
// numbers and returns a new array with only the even numbers.

function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4]));
// [2, 4]

console.log(filterEvenNumbers([5, 6, 7, 8]));
// [6, 8]

// 5.Write a function squareNumbers(arr) that takes an array of numbers
// and returns a new array with each number squared.

function squareNumbers(arr) {
  return arr.map(num => num * num);
}

console.log(squareNumbers([1, 2, 3, 4]));
// [1, 4, 9, 16]

console.log(squareNumbers([5, 6]));
// [25, 36]