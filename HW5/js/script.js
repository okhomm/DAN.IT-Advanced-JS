const API_USERS = 'https://ajax.test-danit.com/api/json/users';
const API_POSTS = 'https://ajax.test-danit.com/api/json/posts';

const content = document.querySelector('#content');


const getPosts = async () => {

  Promise.all([
    fetch(API_USERS).then(response => response.json()),
    fetch(API_POSTS).then(response => response.json()),
  ])
    .then(([usersLink, postsLink] = data) => {
      usersLink.forEach(({ id: userId, name, email }) => {
        postsLink.forEach(({ id: postId, userId: postUserId, title, body }) => {

          if (userId === postUserId) {

            const userPost = new Card(postId, title, body, name, email)

            userPost.render();
            userPost.addDeleteListener();


          }
        });
      });
    })
};

getPosts();
