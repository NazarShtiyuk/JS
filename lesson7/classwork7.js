// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник,
// рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// function Car(model, producer, year, maxSpeed, volumeEng) {
//     this.model = model;
//     this.producer = producer;
//     this.year = year;
//     this.maxSpeed = maxSpeed;
//     this.volumeEng = volumeEng;
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     this.info = function () {
//         document.write(`Модель - ${this.model}<br>Виробник - ${this.producer}<br>Рік випуску - ${this.year}<br>Максимальна швидкість - ${this.maxSpeed}<br>Об'єм двигуна - ${this.volumeEng}`)
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         return this.maxSpeed += newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         return this.year = newValue;
//     }
//     this.addDriver = function driver(driverName, driverYear, driverExp) {
//         this.driverName = driverName;
//         this.driverYear = driverYear;
//         this.driverExp = driverExp;
//     }
// }
//
// let car = new Car('Scoda', 'Chech', 2010, 210, 2);
// console.log(car);
// car.drive();
// car.info();
// console.log(car.increaseMaxSpeed(35));
// console.log(car.changeYear(2015));
// console.log(car.addDriver('vasyl', 30, 5));



// - (Те саме, тільки через клас)
// class Car {
//     constructor(model, producer, year, maxSpeed, volumeEng) {
//         this.model = model;
//         this.producer = producer;
//         this.year = year;
//         this.maxSpeed = maxSpeed;
//         this.volumeEng = volumeEng;
//     }
//     drive() {
//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
//     }
//     info() {
//         document.write(`Модель - ${this.model}<br>Виробник - ${this.producer}<br>Рік випуску - ${this.year}<br>Максимальна швидкість - ${this.maxSpeed}<br>Об'єм двигуна - ${this.volumeEng}`)
//     }
//     increaseMaxSpeed(newSpeed) {
//         return this.maxSpeed += newSpeed;
//     }
//     changeYear(newValue) {
//         return this.year = newValue;
//     }
//     addDriver(driverName, driverAge, driverExp) {
//         this.driverName = driverName;
//         this.driverYear = driverAge;
//         this.driverExp = driverExp;
//     }
// }
// let car = new Car('Scoda', 'Chech', 2010, 210, 2);
// console.log(car);
// car.drive();
// car.info();
// console.log(car.increaseMaxSpeed(35));
// console.log(car.changeYear(2015));
// console.log(car.addDriver('vasyl', 30, 5));


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// class Girl {
//     constructor(girlName, girlAge, girlFootSize) {
//         this.girlName = girlName;
//         this.girlAge = girlAge;
//         this.girlFootSize = girlFootSize;
//     }
// }
// class Boy {
//     constructor(boyName, boyAge, shoeSize) {
//         this.boyName = boyName;
//         this.boyAge = boyAge;
//         this.shoeSize = shoeSize;
//     }
// }
//
// let girls = [
//     new Girl('elza', 18, 35),
//     new Girl('nikee', 20, 34),
//     new Girl('dora', 17, 37),
//     new Girl('jane', 16, 38),
//     new Girl('beatris', 19, 39)
// ];
// let boy = new Boy('Kris', 21, 37);


// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// const findGirl = (girls, boy) => {
//     for (const girl of girls) {
//         if (girl.girlFootSize === boy.shoeSize) {
//             return `tvoya populushka: ${girl.girlName}`
//         }
//     }
// };
// console.log(findGirl(girls, boy))

// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
// console.log(girls.find(value => value.girlFootSize === boy.shoeSize));



