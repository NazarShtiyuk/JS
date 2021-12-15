// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(value => value.json())
//     .then(value => {
//         document.body.style.display = 'flex';
//         document.body.style.flexWrap = 'wrap';
//         for (let element of value) {
//             let div = document.createElement('div');
//             let h3 = document.createElement('h3');
//             let h4 = document.createElement('h4');
//             let p = document.createElement('p');
//             div.style.width = '18%';
//             div.style.border = '1px solid pink';
//             div.style.margin = '0.7%';
//             div.style.padding = '0.2%'
//             h3.innerText = `UserID: ${element.userId} - PostID: ${element.id}`;
//             h4.innerText = `${element.title}`;
//             p.innerText = `${element.body}`;
//             div.append(h3, h4, p);
//             document.body.append(div);
//         }
//     });


// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
// Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(value => value.json())
    .then(value => {
        console.log(value);
        document.body.style.display = 'flex';
        document.body.style.flexWrap = 'wrap';
        for (let element of value) {
            for (let item in element) {
                let div = document.createElement('div');
                let h3 = document.createElement('h3');
                let h4 = document.createElement('h4');
                let h5 = document.createElement('h5');
                let p = document.createElement('p');
                div.style.width = '18%';
                div.style.border = '1px solid green';
                div.style.margin = '0.7%';
                div.style.padding = '0.2%'
                h3.innerText = `UserID: ${element.postId} - PostID: ${element.id}`;
                h3.style.textDecoration = 'underline';
                h4.innerText = `${element.name}`;
                h5.innerText = `Email: ${element.email}`;
                h5.style.color = 'blue';
                p.innerText = `${element.body}`;
                div.append(h3, h4, h5, p);
                document.body.append(div);
            }
        }
    });
