const user = {email: 'jdoe@gmail.com'};

try{
  // Produce a Reference Error 
  // myFunction();

  // Produce a typeError
  // null.myFunction();

  // Produce syntax Error
  // eval('Hello World');

  // Will Produce a URIError
  // decodeURIComponent('%');

  if(!user.name){
    throw 'User has no name'; 
    // throw new SyntaxError('User has no name');
  }

} catch (e) {
  // console.log(e);
  // console.log(e.message);
  console.log(e);
  // console.log(e instanceof ReferenceError);
} finally {
  // console.log('Finally runs regardless of result...');
}

console.log('Program Continues...');