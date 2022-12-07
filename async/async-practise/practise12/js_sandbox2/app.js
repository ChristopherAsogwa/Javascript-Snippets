document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

document.getElementById('button4').addEventListener('click', throwError);

function getText() {
  fetch('test.txt')
    .then(res => res.text())
    .then(data => {
      document.getElementById('output').innerHTML = data;
    })
    .catch(err => console.log(err));
}

function getJson() {
  fetch('posts.json')
    .then(res => res.json())
    .then(data => {
      let output = '';
      data.forEach(function(post){
        output += `<li>${post.title}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

function getExternal() {
  fetch('https://api.github.com/users')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      let output = '';
      data.forEach(function(user){
        output += `<li>${user.login}</li>`
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(err => console.log(err));
}

function throwError() {
  fetch('https://api.github.com/users2020')
  .then(function(res) {
    return res.json();
  })
  .then(function(res) {
    if (!res.ok) {
      throw new Error(res.error);     
    }
  })
}