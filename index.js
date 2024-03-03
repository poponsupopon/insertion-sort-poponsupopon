
const { uuid } = require('uuid');
const { fs } = require('fs-extra');
const { no } = require('fibonacci-sequence-poponsupopon');
const { lib2 } = require('numberguess-poponsupopon');

function insertionSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage:
const array = [64, 34, 25, 12, 22, 11, 90];
console.log("Original array:", array);
console.log("Sorted array using Insertion Sort:", insertionSort(array));


module.exports = { insertionSort };
