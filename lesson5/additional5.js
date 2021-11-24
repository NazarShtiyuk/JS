// - Дано натуральное число n. Выведите все числа от 1 до n.
// let n = 15;
// let someFunc = (n) => {
//     for (let i = 1; i <= n; i++) {
//         console.log(i);
//     }
// }
// someFunc(n);

// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
// let a = +prompt("");
// let b = +prompt("");
// let someFunc = (a, b) => {
//     if (a < b) {
//         for (a; a <= b; a++) {
//             console.log(a);
//         }
//     } else {
//         for (a; a >= b; a--) {
//             console.log(a);
//         }
//     }
// }
// someFunc(a, b);

// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// let i = 3;
// let someFunc = (arr, i) => {
//     if (i < arr.length - 1) {
//         [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
//         console.log(arr);
//     } else {
//         console.log("Число вышло за длину массива");
//     }
// }
// someFunc(arr, i);

// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// let arr = [1, 0, 0, 6, 0, 3, 1, 2, 0, 5, 0, 9];
// function someFunc(arr) {
//     let upperBound = arr.length;
//     for (let i = 0; i < upperBound; i++) {
//         if (arr[i] === 0) {
//             arr.push(0);
//             arr.splice(i, 1);
//             upperBound--;
//             i--;
//         }
//     }
//     return arr;
// }
// console.log(someFunc(arr));


