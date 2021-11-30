// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
// class User {
//
//     constructor(id, name, username, email, addressStreet, addressSuite, addressCity, addressZipcode,
//                 geoLat, geoLng, phone, website, companyName, companyCatchPhrase, companyBs) {
//         this.id = id;
//         this.name = name;
//         this.username = username;
//         this.email = email;
//         this.address = {street: addressStreet, suite: addressSuite, city: addressCity, zipcode: addressZipcode, geo: {lat: geoLat, lng: geoLng}}
//         this.phone = phone;
//         this.website = website;
//         this.company = {name: companyName, catchPhrase: companyCatchPhrase, bs: companyBs}
//     }
//
// }
//
// let user = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz', 'Kulas Light', 'Apt. 556', 'Gwenborough',
//     '92998-3874', '-37.3159', '81.1496', '1-770-736-8031 x56442', 'hildegard.org', 'Romaguera-Crona',
//     'Multi-layered client-server neural-net', 'harness real-time e-markets')
//
// console.log(user);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// class Tag {
//     constructor(tagName, tagSubscribe, attrName1, attrAction1, attrName2, attrAction2) {
//         this.tagName = tagName;
//         this.tagSubscribe = tagSubscribe;
//         this.attrs = [{attrName1, attrAction1}, {attrName2, attrAction2}];
//     }
// }
// let tag1 = new Tag('<a>', 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.',
//     'accesskey', 'Активация ссылки с помощью комбинации клавиш.', 'coords', 'Устанавливает координаты активной области.');
// let tag2 = new Tag('<div>', 'Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа с целью изменения вида содержимого.',
//     'align', 'Задает выравнивание содержимого тега <div>.', 'title', 'Добавляет всплывающую подсказку к содержимому.');
// let tag3 = new Tag('<h1>', 'HTML предлагает шесть заголовков разного уровня, которые показывают относительную важность секции, расположенной после заголовка.',
//     'align', 'Определяет выравнивание заголовка.', 'class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.');
// let tag4 = new Tag('<input>', 'Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем.',
//     'alt', 'Альтернативный текст для кнопки с изображением.', 'border', 'Толщина рамки вокруг изображения.');
// let tag5 = new Tag('<option>', 'Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>.',
//     'disabled','Заблокировать для доступа элемент списка.', 'label', 'Указание метки пункта списка.');
// console.log(tag1);
// console.log(tag2);
// console.log(tag3);
// console.log(tag4);
// console.log(tag5);
