// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}
let arrUsers = [
        new User(10, 'vasyl', 'pupkin', 'asdfasdf@gmail.com', '+380989898989'),
        new User(5, 'olya', 'pupkin', 'asdfasdf@gmail.com', '+380989898787'),
        new User(7, 'kolya', 'pupkin', 'asdfasdf@gmail.com', '+380989898454'),
        new User(4, 'gena', 'pupkin', 'asdfasdf@gmail.com', '+380989898656'),
        new User(2, 'tanya', 'pupkin', 'asdfasdf@gmail.com', '+380989898121'),
        new User(6, 'petya', 'pupkin', 'asdfasdf@gmail.com', '+380989898363'),
        new User(3, 'andriy', 'pupkin', 'asdfasdf@gmail.com', '+380989898747'),
        new User(8, 'oksana', 'pupkin', 'asdfasdf@gmail.com', '+380989898252'),
        new User(9, 'svitlana', 'pupkin', 'asdfasdf@gmail.com', '+380989898191'),
        new User(1, 'oleksandr', 'pupkin', 'asdfasdf@gmail.com', '+380989898262')
];

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let filter = arrUsers.filter(user => {
    if (!(user.id % 2)) {
        return user;
    }
});
console.log(filter);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
let sort = arrUsers.sort((user1, user2) => user1.id - user2.id);
console.log(sort);




// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
class Client extends User{
    constructor(id, name, surname, email, phone, order) {
        super(id, name, surname, email, phone);
        this.order = order;
    }
}
let arrClients = [
        new Client(10, 'vasyl', 'pupkin', 'asdfasdf@gmail.com', '+380989898989', ['table', 'chair', 'books']),
        new Client(5, 'olya', 'pupkin', 'asdfasdf@gmail.com', '+380989898787', ['door', 'books', 'lamp']),
        new Client(7, 'kolya', 'pupkin', 'asdfasdf@gmail.com', '+380989898454', ['desk', 'table', 'chair', 'door', 'books', 'lamp']),
        new Client(4, 'gena', 'pupkin', 'asdfasdf@gmail.com', '+380989898656', ['desk', 'table', 'door', 'books', 'lamp']),
        new Client(2, 'tanya', 'pupkin', 'asdfasdf@gmail.com', '+380989898121', ['desk', 'table']),
        new Client(6, 'petya', 'pupkin', 'asdfasdf@gmail.com', '+380989898363', ['desk', 'table', 'chair', 'door', 'books', 'lamp']),
        new Client(3, 'andriy', 'pupkin', 'asdfasdf@gmail.com', '+380989898747', ['desk', 'table', 'books', 'lamp']),
        new Client(8, 'oksana', 'pupkin', 'asdfasdf@gmail.com', '+380989898252', ['desk', 'table', 'chair', 'door', 'books', 'lamp']),
        new Client(9, 'svitlana', 'pupkin', 'asdfasdf@gmail.com', '+380989898191', ['desk', 'table', 'chair', 'door']),
        new Client(1, 'oleksandr', 'pupkin', 'asdfasdf@gmail.com', '+380989898262', ['desk', 'table', 'chair', 'door', 'books'])
];

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortClient = arrClients.sort((client1, client2) => client1.order.length - client2.order.length);
console.log(sortClient);

