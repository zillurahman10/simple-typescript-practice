"use strict";
const a = [2, 22, 45, 1, 7, 8, 47, 78, 30];
const findEvenNumbers = () => {
    let numbers = [];
    const evenNumbers = a.filter(number => number % 2);
    numbers.push(...a, evenNumbers[0]);
    console.log(numbers);
};
