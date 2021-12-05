let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];

// a
//let arr = []
// for (let user of users) {
//     arr.push(user.address);
// }
// console.log(arr);


// b
// for (let user of users) {
//     let div = document.createElement('div');
//     let ul = document.createElement('ul');
//     div.appendChild(ul);
//     for (let element in user) {
//         let li = document.createElement('li');
//         li.innerText = `${element}: ${user[element]}`;
//         ul.appendChild(li);
//         if ((typeof user[element] === 'object')) {
//             li.innerText = `${element}:`;
//             let ul_1 = document.createElement('ul');
//             for (let elem in user[element]) {
//                 let li_1 = document.createElement('li');
//                 li_1.innerText = `${elem}: ${user[element][elem]}`;
//                 ul_1.appendChild(li_1);
//             }
//             ul.appendChild(ul_1);
//         }
//     }
//     document.body.appendChild(div);
// }


 // c & d
// for (let user of users) {
//     let div = document.createElement('div');
//     let hr = document.createElement('hr');
//     for (let element in user) {
//         let div_1 = document.createElement('div');
//         div_1.innerText = `${element}: ${user[element]}`;
//         if ((typeof user[element] === 'object')) {
//             div_1.innerText = `${element}:`;
//             for (let elem in user[element]) {
//                 let div_2 = document.createElement('div');
//                 div_2.innerText = `${elem}: ${user[element][elem]}`;
//                 div_2.style.marginLeft = '15px';
//                 div_1.appendChild(div_2);
//             }
//         }
//         div.appendChild(div_1);
//     }
//     document.body.appendChild(div);
//     document.body.appendChild(hr);
// }


//  є сторінка rules.html               (Код скопировал в superAdditional.html).             Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
// let firstElement = document.body;
// let divWithContent = document.getElementById('content');
// let ul = document.createElement('ul');
// divWithContent.appendChild(ul);
// let recursive = (firstElement) => {
//     for (let element of firstElement.children) {
//         console.log(element);
//         if (element.className !== '') {
//             for (let i = 0; i < element.children.length; i++) {
//                 if (element.children[i].localName === 'h2') {
//                     let li = document.createElement('li');
//                     li.innerHTML = `<a href="#">${element.children[i].innerText}</a>`;
//                     ul.appendChild(li);
//                 }
//             }
//         }
//         recursive(element);
//     }
// }
// recursive(firstElement);


// let rules = [
//     {
//         title: 'Первое правило Бойцовского клуба.',
//         body: 'Никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Второе правило Бойцовского клуба.',
//         body: 'Никогда никому не рассказывать о Бойцовском клубе.'
//     },
//     {
//         title: 'Третье правило Бойцовского клуба.',
//         body: 'В схватке участвуют только двое.'
//     },
//     {
//         title: 'Четвертое правило Бойцовского клуба.',
//         body: 'Не более одного поединка за один раз.'
//     },
//     {
//         title: 'Пятое правило Бойцовского клуба.',
//         body: 'Бойцы сражаются без обуви и голые по пояс.'
//     },
//     {
//         title: 'Шестое правило Бойцовского клуба.',
//         body: 'Поединок продолжается столько, сколько потребуется.'
//     },
//     {
//         title: 'Седьмое правило Бойцовского клуба.',
//         body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
//     },
//     {
//         title: 'Восьмое и последнее правило Бойцовского клуба.',
//         body: 'Новичок обязан принять бой.'
//     },
//
// ];
//
// for (let rule of rules) {
//     let div = document.createElement('div');
//     for (let element in rule) {
//         if (element === 'title') {
//             let h2 = document.createElement('h2');
//             h2.innerText = rule[element];
//             div.appendChild(h2);
//         } else if (element === 'body') {
//             let p = document.createElement('p');
//             p.innerText = rule[element];
//             div.appendChild(p);
//         }
//
//     }
//     document.body.appendChild(div);
// }



