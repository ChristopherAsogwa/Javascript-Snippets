// async function myFunc() {
//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Hello'), 1000);
//   });

//   const error = false;

//   if(!error) {
//     // Wait till promise is resolved
//     const res = await promise; 

//     return res
//   }else{
//     await Promise.reject(new Error('Something went wrong...'));
//   }
// }

// myFunc()
//   .then(res => console.log(res))
//   .catch(err => console.log(err));

async function getUsers() {
  // await response of fetch calls 
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  // Only proceed once it is resolved
  const data = await response.json();

  // Only proceed once second promise is resolved
  return data;
}

getUsers().then(users => console.log(users));