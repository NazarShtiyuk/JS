// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@),
// наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру
// (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// let someEmail = 'some.email@gmail.com';
// let emailValidator = (mail, symb1, symb2) => {
//     let arr = [];
//     let x;
//     for (let i = 0; i < someEmail.length; i++) {
//         arr.push(someEmail[i]);
//         if (someEmail[i] === symb1 && i > 5) {
//             x = i;
//         }
//         if (someEmail[i] === symb2 && (i - x) > 2) {
//             console.log('Mail is valid')
//         }
//     }
//     return someEmail;
// }
// console.log(emailValidator(someEmail, '@', '.'));

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// let coursesArray = [
//     {
//         title: 'JavaScript Complex',
//         monthDuration: 5,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//     },
//     {
//         title: 'Java Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'git', 'java core', 'java advanced']
//     },
//     {
//         title: 'Python Complex',
//         monthDuration: 6,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'angular', 'aws', 'docker', 'python core', 'python advanced']
//     },
//     {
//         title: 'QA Complex',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//     },
//     {
//         title: 'FullStack',
//         monthDuration: 7,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js', 'python', 'java']
//     },
//     {
//         title: 'Frontend',
//         monthDuration: 4,
//         hourDuration: 909,
//         modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//     }
// ];
// console.log(coursesArray.sort((elem1, elem2) => elem2.modules.length - elem1.modules.length));

// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
// let count = (str, symbol) => {
//     let arr = [];
//     for (let strElement of str) {
//         if (strElement.includes(symbol)) {
//             arr.push(strElement);
//         }
//     }
//     return arr.length;
// }
// console.log(count('Астрономия это наука о небесных объектах', 'о'))

// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
// let cutString = (str, n) => {
//     let split = str.split(' ');
//     for (let i = 0; i < split.length; i++) {
//         if (i === n) {
//             return split.slice(0, n).join(' ');
//         }
//     }
// }
// console.log(cutString("Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд", 8));