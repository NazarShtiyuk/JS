// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let a = +prompt("Введіть сторону А");
let b = +prompt("Введіть сторону Б");
let areaRectangle = (a, b) => a * b;
console.log(areaRectangle(a, b));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let r = +prompt("Введите радиус r");
// let areaCircle = (r) => { return Math.PI * r ** 2; }
// console.log(areaCircle(r));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let h = +prompt("Введите высоту h");
// let r = +prompt("Введите радиус r");
// let areaCylinder = (h, r) => { return 2 * Math.PI * r ** 2 * h; }
// console.log(areaCylinder(h, r));

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let displayElement = (arr) => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// displayElement(arr);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let someText = prompt("Введите текст который хотите увидить на экране");
// let createParagraph = (someText) => { document.write(`<p>${someText}</p>`); }
// createParagraph(someText);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let someText = prompt("Введите текст который хотите увидить на экране");
// let createList = (someText) => {
//     document.write(`<ul>`);
//     document.write(`<li>${someText}</li>`);
//     document.write(`<li>${someText}</li>`);
//     document.write(`<li>${someText}</li>`);
//     document.write(`<ul>`);
// }
// createList(someText);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let someText = prompt("Введите текст который хотите увидить на экране");
// let countLi = +prompt("Введите количество пунктов");
// let createList = (someText) => {
//     document.write(`<ul>`);
//     for (let i = 0; i < countLi; i++) {
//         document.write(`<li>${someText}</li>`);
//     }
//     document.write(`<ul>`);
// }
// createList(someText);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
// let arr = [1, 'hello', 34, true, false];
// let createListFromArray = (arr) => {
//     document.write(`<ul>`);
//     for (let arrElement of arr) {
//         document.write(`<li>${arrElement}</li>`);
//     }
//     document.write(`<ul>`);
// }
// createListFromArray(arr);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let arr = [{id: 1, name: 'Vasyl', age: 15},{id: 2, name: 'Mykola', age: 19},{id: 3, name: 'Petya', age: 23},];
// let createBlocksOfObject = (arr) => {
//     for (let objectElement of arr) {
//         document.write(`<div>`);
//         for (let objectElementKey in objectElement) {
//             document.write(`${objectElementKey}: ${objectElement[objectElementKey]}, `);
//         }
//         document.write(`</div>`);
//         document.write(`<hr>`)
//     }
// }
// createBlocksOfObject(arr);