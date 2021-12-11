let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
let farourite = [];

for (let user of users) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    let button = document.createElement('button');
    let hr = document.createElement('hr');
    button.innerText = 'Add to favourite';
    h2.innerText = `Name: ${user.name}, Age: ${user.age}, Married: ${user.status}`;
    button.onclick = function () {
        farourite.push(user);
        localStorage.setItem('Favourite', JSON.stringify(farourite));
    }


    div.appendChild(h2);
    div.appendChild(button);
    div.appendChild(hr);
    document.body.appendChild(div);
}

let a = document.createElement('a');
a.innerText = 'Go to Favourites';
a.href = 'favourite.html';
document.body.appendChild(a);

