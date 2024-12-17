const _ = require('lodash');

// Пример использования lodash: создание уникального массива
const numbers = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers = _.uniq(numbers);

console.log('Original array:', numbers);
console.log('Unique array:', uniqueNumbers);