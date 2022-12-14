let re;
// re = /hello/;
re = /hello/i; //Case insensitive 
// re = /hello/g; //Global Search

// console.log(re);
// console.log(re.source);

// Possible functions 
// exec() - Return result in an array or null 
// const result = re.exec('James Hello world');


// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

//test() - Returns true or false 
// const result = re.test('Hello');
// console.log(result);

// match() - Return Result array or null
// const str = 'Hello There';
// const result = str.match(re);
// console.log(result);

// Search() - returns index of the first match, if not returns -1
// const str = 'Hello There';
// const result = str.search(re);
// console.log(result);

// replace() - Returns new string with some or all matches of a pattern 
const str = 'Hello There';
const newStr = str.replace(re, 'Hi');
console.log(newStr);