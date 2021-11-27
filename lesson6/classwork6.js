// - Дано список імен.
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// let validator = (str) => {
//     return str
//         .replaceAll('..', ' ')
//         .replaceAll('---', ' ')
//         .replaceAll('__', ' ')
// }
// console.log(validator(n1));
// console.log(validator(n2));
// console.log(validator(n3));

// - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
let randomNum = (count) => {
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(Math.round(Math.random() * 100));
    }
    return arr;
}
// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
// console.log(randomNum(10).sort((num1, num2) => num1 - num2));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа
// console.log(randomNum(10).filter(num => num % 2 === 0));

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// console.log(randomNum(10).map(num => num.toString()));

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let sortNum = (direction) => {
//     if (direction === 'ascending') {
//         return randomNum(10).sort((num1, num2) => num1 - num2);
//     } else if (direction === 'descending') {
//         return randomNum(10).sort((num1, num2) => num2 - num1);
//     } else {
//         return randomNum(10);
//     }
// }
// console.log(sortNum('descending'));

// -- відсортувати його за спаданням за monthDuration
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray
//         .sort((elem1, elem2) =>
//         elem1.monthDuration - elem2.monthDuration));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
// console.log(coursesAndDurationArray.filter(elem => elem.monthDuration > 5));

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
// let cutString = (str, n) => {
//     let arr = [];
//     while (str.length) {
//         arr.push(str.substring(0, n));
//         str = str.slice(n);
//     }
//     return arr;
// }
// console.log(cutString('sdsdgsdgsdgsdgsdgsdgsdgsdgsdgsdgsd', 5));