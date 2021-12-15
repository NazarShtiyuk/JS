// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
// зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
fetch('https://jsonplaceholder.typicode.com/posts')
    .then(value => value.json())
    .then(value => {
        // let container = document.createElement('div');
        document.body.style.display = 'flex';
        document.body.style.flexWrap = 'wrap';
        for (let element of value) {
            let divPost = document.createElement('div');
            let h3Post = document.createElement('h3');
            let h4Post = document.createElement('h4');
            let pPost = document.createElement('p');
            let buttonPost = document.createElement('button');
            divPost.style.width = '18%';
            divPost.style.border = '1px solid pink';
            divPost.style.margin = '0.7%';
            divPost.style.padding = '0.2%'
            h3Post.innerText = `UserID: ${element.userId} - PostID: ${element.id}`;
            h4Post.innerText = `${element.title}`;
            pPost.innerText = `${element.body}`;
            buttonPost.innerText = 'See comment';
            buttonPost.onclick = function (e) {
                e.preventDefault();
                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(value1 => value1.json())
                    .then(value1 => {
                        console.log(value1)
                        for (let element1 of value1) {
                            if (element.id === element1.postId) {
                                let divComment = document.createElement('div');
                                let h3Comment = document.createElement('h3');
                                let h4Comment = document.createElement('h4');
                                let h5Comment = document.createElement('h5');
                                let pComment = document.createElement('p');
                                divComment.style.width = '95%';
                                divComment.style.border = '1px solid green';
                                divComment.style.margin = '1.5%';
                                divComment.style.padding = '1%'
                                h3Comment.innerText = `UserID: ${element1.postId} - PostID: ${element1.id}`;
                                h3Comment.style.textDecoration = 'underline';
                                h4Comment.innerText = `${element1.name}`;
                                h5Comment.innerText = `Email: ${element1.email}`;
                                h5Comment.style.color = 'blue';
                                pComment.innerText = `${element1.body}`;
                                divComment.append(h3Comment, h4Comment, h5Comment, pComment);
                                divPost.append(divComment);
                            }
                        }
                    })
            }
            divPost.append(h3Post, h4Post, pPost, buttonPost);
            document.body.append(divPost);
        }
        // document.body.append(container);
    });
