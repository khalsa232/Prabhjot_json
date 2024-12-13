// Fetching Users
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => {
    const userList = document.getElementById('user-list');
    users.forEach(user => {
      userList.innerHTML += `
        <div class="card">
          <h3>${user.name}</h3>
          <p><strong>Username:</strong> ${user.username}</p>
          <p><strong>Email:</strong> ${user.email}</p>
          <p><strong>City:</strong> ${user.address.city}</p>
        </div>
      `;
    });
  })
  .catch(error => console.error('Error fetching users:', error));

// Fetching Posts
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(posts => {
    const postList = document.getElementById('post-list');
    posts.slice(0, 10).forEach(post => {
      postList.innerHTML += `
        <div class="card">
          <h3>${post.title}</h3>
          <p>${post.body}</p>
        </div>
      `;
    });
  })
  .catch(error => console.error('Error fetching posts:', error));

// Fetching Comments
fetch('https://jsonplaceholder.typicode.com/comments')
  .then(response => response.json())
  .then(comments => {
    const commentList = document.getElementById('comment-list');
    comments.slice(0, 10).forEach(comment => {
      commentList.innerHTML += `
        <div class="card">
          <h3>${comment.name}</h3>
          <p><strong>Email:</strong> ${comment.email}</p>
          <p>${comment.body}</p>
        </div>
      `;
    });
  })
  .catch(error => console.error('Error fetching comments:', error));
