const http = new EasyHTTP;

// Get users 
// http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

const data = {
  name: 'John Doe',
  username: 'Johndoe',
  email: 'jdoe@gmail.com'
};

// Create Users
// http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Update Users 
// http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Delete Users 
http.delete('https://jsonplaceholder.typicode.com/users/3', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));