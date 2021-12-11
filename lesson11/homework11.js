// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let button1 = document.getElementById('button1');

button1.onclick = function () {
    localStorage.setItem('name', `${document.forms['form1'].name.value}`);
    localStorage.setItem('age', `${document.forms['form1'].age.value}`)
}


// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let button2 = document.getElementById('button2');
let cars = [];

button2.onclick = function (e) {
    let car = {
        model: document.forms['form2'].model.value,
        type: document.forms['form2'].type.value,
        volume: document.forms['form2'].volume.value
    }
    e.preventDefault();
    cars.push(car);
    localStorage.setItem('cars', JSON.stringify(cars));
}