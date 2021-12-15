fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {
        document.body.style.display = 'flex';
        document.body.style.flexWrap = 'wrap';
        for (let user of users) {
            console.log(user)
            let divUser = document.createElement('div');
            let buttonUser = document.createElement('button');
            divUser.style.width = '18%';
            divUser.style.border = '1px solid blue';
            divUser.style.margin = '0.7%';
            divUser.style.padding = '0.2%'
            divUser.innerHTML = `<h3>ID: ${user.id}, ${user.name} ${user.username}</h3>
                                 <h4>Email: ${user.email}, Phone: ${user.phone}</h4>
                                 <h4>Website: ${user.website}</h4>
                                 <h5>Company: ${user.company.name}<br>Девиз: ${user.company.catchPhrase}<br>Направление: ${user.company.bs}</h5>`;
            buttonUser.innerHTML = 'See posts';
            buttonUser.onclick = function (e) {
                e.preventDefault();
                fetch('https://jsonplaceholder.typicode.com/posts')
                    .then(posts => posts.json())
                    .then(posts => {
                        for (let post of posts) {
                            if (user.id === post.userId) {
                                let divPost = document.createElement('div');
                                let h3Post = document.createElement('h3');
                                let h4Post = document.createElement('h4');
                                let pPost = document.createElement('p');
                                let buttonPost = document.createElement('button');
                                divPost.style.width = '95%';
                                divPost.style.border = '1px solid pink';
                                divPost.style.margin = '1.5%';
                                divPost.style.padding = '1%'
                                h3Post.innerText = `UserID: ${post.userId} - PostID: ${post.id}`;
                                h4Post.innerText = `${post.title}`;
                                pPost.innerText = `${post.body}`;
                                buttonPost.innerText = 'See comment';
                                buttonPost.onclick = function (e) {
                                    e.preventDefault();
                                    fetch('https://jsonplaceholder.typicode.com/comments')
                                        .then(comments => comments.json())
                                        .then(comments => {
                                            for (let comment of comments) {
                                                if (post.id === comment.postId) {
                                                    let divComment = document.createElement('div');
                                                    let h3Comment = document.createElement('h3');
                                                    let h4Comment = document.createElement('h4');
                                                    let h5Comment = document.createElement('h5');
                                                    let pComment = document.createElement('p');
                                                    divComment.style.width = '95%';
                                                    divComment.style.border = '1px solid green';
                                                    divComment.style.margin = '1.5%';
                                                    divComment.style.padding = '1%'
                                                    h3Comment.innerText = `UserID: ${comment.postId} - PostID: ${comment.id}`;
                                                    h3Comment.style.textDecoration = 'underline';
                                                    h4Comment.innerText = `${comment.name}`;
                                                    h5Comment.innerText = `Email: ${comment.email}`;
                                                    h5Comment.style.color = 'blue';
                                                    pComment.innerText = `${comment.body}`;
                                                    divComment.append(h3Comment, h4Comment, h5Comment, pComment);
                                                    divPost.append(divComment);
                                                }
                                            }
                                        })
                                }
                                divPost.append(h3Post, h4Post, pPost, buttonPost);
                                divUser.append(divPost);
                            }
                        }
                    });
            }


            divUser.appendChild(buttonUser);
            document.body.appendChild(divUser);
        }
    })