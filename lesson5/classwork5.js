// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// let a = +prompt("Введіть число а");
// let b = +prompt("Введіть число б");
// let c = +prompt("Введіть число с");
//
// let minNumber = (a, b, c) => {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// minNumber(a, b, c);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
// let a = +prompt("Введіть число а");
// let b = +prompt("Введіть число б");
// let c = +prompt("Введіть число с");
//
// let maxNumber = (a, b, c) => {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else {
//         console.log(c);
//     }
// }
// maxNumber(a, b, c);

// - створити функцію яка повертає найбільше число з масиву
// let arr = [1, 4, 5, 34, 23, 128, 2, 56, 78, 43, 21];
// let maxNumOfArray = (arr) => {
//     let maxNum = arr[0];
//     for (let arrElement of arr) {
//         if (arrElement > maxNum) {
//             maxNum = arrElement;
//         }
//     }
//     return maxNum;
// }
// console.log(maxNumOfArray(arr));

// - створити функцію яка повертає найменьше число з масиву
// let arr = [10, 4, 5, 34, 23, 128, 2, 56, 78, 43, 21];
// let minNumOfArray = (arr) => {
//     let minNum = arr[0];
//     for (let arrElement of arr) {
//         if (arrElement < minNum) {
//             minNum = arrElement;
//         }
//     }
//     return minNum;
// }
// console.log(minNumOfArray(arr));

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let arr = [1, 3, 15];
//
// let sumElementOfArray = (arr) => {
//     let sum = 0;
//     for (let arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
// console.log(sumElementOfArray(arr));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let arr = [1, 3, 15, 15, 25, 32, 62];
// let average = 0;
//
// let arithmeticalMean = (arr) => {
//     for (let arrElement of arr) {
//         average += arrElement;
//     }
//     average /= arr.length;
//     return average;
// }
// console.log(arithmeticalMean(arr));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let maxMinElement = function () {
//     let maxElement = arguments[0];
//     let minElement = arguments[0];
//     for (let argElement of arguments) {
//         if (argElement > maxElement) {
//             maxElement = argElement;
//         }
//         if (argElement < minElement) {
//             minElement = argElement;
//         }
//     }
//     console.log(maxElement);
//     return minElement;
// }
// maxMinElement(1, 5, 15, 12, 36, 12, 45);

// - створити функцію яка заповнює масив рандомними числами
// let arr = [];
//
// let randomElement = (arr) => {
//     for (let i = 0; i < 10; i++) {
//         let randomNum = Math.round(Math.random() * 100);
//         arr.push(randomNum);
//     }
//     console.log(arr);
// }
// randomElement(arr);

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let arr = [];
//
// let randomElement = (arr, limit) => {
//     for (let i = 0; i < 10; i++) {
//         let randomNum = Math.round(Math.random() * limit);
//         arr.push(randomNum);
//     }
//     console.log(arr);
// }
// randomElement(arr, 10);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let arr = [1, 3, 5, 7, 9];
// let newArr = [];
// let reverseArr = (arr, newArr) => {
//     for (let i = arr.length - 1; i >= 0; i--) {
//         newArr.push(arr[i]);
//     }
//     console.log(arr);
//     console.log(newArr);
// }
// reverseArr(arr, newArr);