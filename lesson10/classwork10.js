// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let h2_1 = document.createElement('h2');
// h2_1.innerText = 'Item 1';
// document.body.appendChild(h2_1);
//
// let f1 = document.createElement('form');
// f1.setAttribute('name', 'f1');
// document.body.appendChild(f1);
// let inpute1_1 = document.createElement('input');
// inpute1_1.setAttribute('name', 'inpute1_1');
// let inpute1_2 = document.createElement('input');
// inpute1_2.setAttribute('name', 'inpute1_2');
//
// let h2_2 = document.createElement('h2');
// h2_2.innerText = 'Item 2';
// document.body.appendChild(h2_2);
//
// let f2 = document.createElement('form');
// f2.setAttribute('name', 'f2');
// document.body.appendChild(f2);
// let inpute2_1 = document.createElement('input');
// inpute2_1.setAttribute('name', 'inpute2_1');
// let inpute2_2 = document.createElement('input');
// inpute2_2.setAttribute('name', 'inpute2_2');
//
// let button = document.createElement('button');
// button.innerText = 'See values';
// document.body.appendChild(button);
//
// f1.append(inpute1_1,inpute1_2);
// f2.append(inpute2_1,inpute2_2);
//
//
// button.addEventListener('click', function (){
//     console.log(document.forms.f1.inpute1_1.value);
//     console.log(document.forms.f1.inpute1_2.value);
//     console.log(document.forms.f2.inpute2_1.value);
//     console.log(document.forms.f2.inpute2_2.value);
// })

// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// let inputOne = document.createElement('input');
// let inputTwo = document.createElement('input');
// let inputThree = document.createElement('input');
// let button = document.createElement('button');
// button.innerText = 'Build'
//
// document.body.appendChild(inputOne);
// document.body.appendChild(inputTwo);
// document.body.appendChild(inputThree);
// document.body.appendChild(button);
//
// let table = document.createElement('table');
// document.body.appendChild(table);
//
// button.onclick = function () {
//     for (let i = 1; i <= inputOne.value; i++) {
//         let tr = document.createElement('tr');
//         table.appendChild(tr);
//         for (let j = 1; j <= inputTwo.value; j++) {
//             let td = document.createElement('td');
//             td.innerText = inputThree.value;
//             table.appendChild(td);
//         }
//     }
// }


let array = ['придурок', 'свинья', 'дурак', 'трус'];
let input = document.createElement('input');
let button = document.createElement('button');
button.innerText = 'Check';
document.body.append(input, button);


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
// button.onclick = function () {
//     for (let element of array) {
//         if (input.value === element) {
//             alert('Аяяй, как не красиво вы написали!');
//             input.value = '';
//         }
//     }
// }




// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку
// button.onclick = function () {
//     for (let element of array) {
//         if (input.value.includes(element)) {
//             alert('Аяяй, как не красиво вы написали!');
//             input.value = '';
//         }
//         if (!(input.value.includes(element))) {
//             let p = document.createElement('p');
//             p.innerText = input.value;
//             document.body.append(p);
//             input.value = '';
//         }
//     }
// }