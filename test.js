const { makeUniqueArray, countElements, sortArray } = require('./dist/bundle');

const array = [4, 2, 2, 8, 3, 3, 1, 4];

console.log('Исходный массив:', array);
console.log('Уникальный массив:', makeUniqueArray(array));
console.log('Количество элементов:', countElements(array));
console.log('Отсортированный массив:', sortArray(array));
