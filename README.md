# Unique Array Module

This npm module provides a simple function to create a unique array from duplicates.

## Installation

```bash
npm install unique-array-module
```

## Usage

This module provides three functions: makeUniqueArray, countElements, and sortArray. Here's how to use them:

Importing the Module
First, import the required functions from the module:

```js
const {
  makeUniqueArray,
  countElements,
  sortArray,
} = require("unique-array-module");
```

Given the array [4, 2, 2, 8, 3, 3, 1, 4], the module can perform the following operations:

1. Create a Unique Array
   The makeUniqueArray function removes duplicate elements from the array:

```js
const array = [4, 2, 2, 8, 3, 3, 1, 4];
const uniqueArray = makeUniqueArray(array);
console.log("Unique Array:", uniqueArray);
// Output: [4, 2, 8, 3, 1]
```

2. Count the Number of Elements
   The countElements function returns the number of elements in the array:

```js
const count = countElements(array);
console.log("Number of Elements:", count);
// Output: 8
```

3. Sort the Array
   The sortArray function sorts the array in ascending order:

```js
const sortedArray = sortArray(array);
console.log("Sorted Array:", sortedArray);
// Output: [1, 2, 2, 3, 3, 4, 4, 8]
```

4. Complete Example
   Here's a complete example:

```js
const {
  makeUniqueArray,
  countElements,
  sortArray,
} = require("unique-array-module");

const array = [4, 2, 2, 8, 3, 3, 1, 4];

console.log("Original Array:", array);
console.log("Unique Array:", makeUniqueArray(array));
console.log("Number of Elements:", countElements(array));
console.log("Sorted Array:", sortArray(array));
```
