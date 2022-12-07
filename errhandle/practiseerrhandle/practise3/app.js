let re;
// Literal Characters
// re = /hello/;
// re = /hello/i;

// MetaCharacter Symbol
re = /^h/i; //Must start with
re = / world$/i; //Must end with
re = /^hello$/i; //Must begin and end with 
re = /h.llo/i; //Matches any one character
re = /h*llo/i; //Matches any character 0 or more times
re = /gre?a?y/i; //Optional Character
re = /gre?a?y\?/i; //Escape Character

// String to match 
const str = 'Gray?';

// Log results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if(re.test(str)){
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);