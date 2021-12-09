// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let element = document.createElement('div');
// element.style.width = '200px';
// element.style.height = '200px';
// element.style.background = 'red';
// element.style.marginBottom = '10px';
// element.id = 'text';
// let btn = document.createElement('button');
// btn.innerText = 'Delete element';
// btn.onclick = function () {
//     element.style.display = 'none';
// }
// document.body.appendChild(element);
// document.body.appendChild(btn);


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let btn = document.createElement('button');
// btn.innerText = 'Delete this button';
// btn.onclick = function () {
//     btn.style.display = 'none';
// }
// document.body.appendChild(btn);


// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це
// let input = document.createElement('input');
// input.name = 'age';
// let btn = document.createElement('button');
// btn.innerText = 'Check';
// btn.onclick = function () {
//     if (input.value > 18) {
//         document.write('Вам доступний контент, так як вам є 18 років');
//     } else if (input.value < 18) {
//         document.write('Нажаль ви ще не досягли повноліття');
//     } else {
//         document.write('Ви ввели щось не так!');
//     }
// }
// document.body.appendChild(input);
// document.body.appendChild(btn);


// - Создайте меню, которое раскрывается/сворачивается при клике
// let ul = document.getElementsByClassName('menu')[0];
// let flag = true;
// let btn = document.getElementById('btn');
// btn.onclick = function (e) {
//     e.preventDefault();
//     if (flag === true) {
//         ul.style.display = 'none';
//         flag = false;
//         btn.innerText = 'Show menu';
//     } else if (flag === false) {
//         ul.style.display = 'block';
//         flag = true;
//         btn.innerText = 'Hide menu';
//     }
// }


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
// let arr = [
//     {title: 'lorem1', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem2', body: 'lorem ipsum dolo sit ameti'},
//     {title: 'lorem3', body: 'lorem ipsum dolo sit ameti'}
// ];
// for (let element of arr) {
//     let h2 = document.createElement('h2');
//     h2.innerText = element.title;
//     let p = document.createElement('p');
//     p.innerText = element.body;
//     let btn = document.createElement('button');
//     btn.innerText = 'Hide content';
//     document.body.appendChild(h2);
//     document.body.appendChild(p);
//     document.body.appendChild(btn);
//     btn.onclick = function () {
//         if (btn.innerText.includes('Hide')) {
//             p.style.display = 'none';
//             btn.innerText = 'Show content';
//         } else if (btn.innerText.includes('Show')) {
//             p.style.display = 'block';
//             btn.innerText = 'Hide content';
//         }
//     }
// }





