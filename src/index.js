const _ = require('lodash');

/**
 * Уникализация массива
 * @param {Array} array
 * @returns {Array}
 */
function makeUniqueArray(array) {
  return _.uniq(array);
}

/**
 * Подсчет количества элементов
 * @param {Array} array
 * @returns {number}
 */
function countElements(array) {
  return array.length;
}

/**
 * Сортировка массива
 * @param {Array} array
 * @returns {Array}
 */
function sortArray(array) {
  return _.sortBy(array);
}

// Экспортируем функции
module.exports = {
  makeUniqueArray,
  countElements,
  sortArray,
};
