//При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
// let span = document.createElement('span');
// document.body.append(span);
// span.innerText = 'lorem';
// document.onclick = function (e) {
//     let nameTag = e.target;
//     let classList = e.target.classList;
//     let id = `ID: ${e.target.id}`;
//     let width = `Width: ${e.target.offsetWidth}`;
//     let height = `Height: ${e.target.offsetHeight}`;
//     console.log(nameTag)
//     console.log(classList);
//     console.log(id);
//     console.log(width);
//     console.log(height);
// }


//При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
let popUpDiv = document.createElement('div');
popUpDiv.classList.add('popup');
document.onclick = function (e) {
    console.log(e)
    popUpDiv.innerText = `Element: ${e.target.localName}, Classes: ${e.target.classList}, ID: ${e.target.id}, Width: ${e.target.offsetWidth}, Height: ${e.target.offsetHeight}`;
    popUpDiv.style.position = 'relative';
    popUpDiv.style.top = `${e.clientY - 75}px`;
    popUpDiv.style.left = `${e.clientX}px`;
    popUpDiv.style.background = 'yellow';
    popUpDiv.style.width = '500px';
    popUpDiv.style.textAlign = 'center';
    popUpDiv.classList.toggle('popup');
    document.body.appendChild(popUpDiv);
}



// let usersWithAddress = [
//     {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//     {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//     {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//     {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//     {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//     {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//     {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//     {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//     {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//     {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
// ];
//
// f1 = document.forms['f1'];
//
// f1.inp1.onclick = function () {
//     if (this.checked) {
//         let inp1_filter = usersWithAddress.filter(element => element.status === false);
//         console.log(inp1_filter);
//     }
// }
// f1.inp2.onclick = function () {
//     if (this.checked) {
//         let inp2_filter = usersWithAddress.filter(element => element.age >= 29);
//         console.log(inp2_filter);
//     }
// }
// f1.inp3.onclick = function () {
//     if (this.checked) {
//         let inp3_filter = usersWithAddress.filter(element => element.address.city === 'Kyiv');
//         console.log(inp3_filter);
//     }
// }




// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
// document.onclick = function(){
//     let someElement = getSelection();
//     let selectionText = someElement.toString();
//     let span = document.createElement('span');
//     span.textContent = selectionText;
//     span.style.fontWeight = 'bold';
//     let range = someElement.getRangeAt(0);
//     range.deleteContents();
//     range.insertNode(span);
// };

