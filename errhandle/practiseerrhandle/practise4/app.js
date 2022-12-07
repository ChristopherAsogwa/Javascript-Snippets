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

// Brackets [] - Character Sets 
re = /gr[ae]y/; //Must be an a or e
re = /[GF]ray/i; //Must be a G or F - case sensitive
re = /[^GF]ray/i; //Match anything except G or F
re = /[A-Z]ray/ ;//Match any uppercase letters
re = /[a-z]ray/; //Matches any lowercase letters
re = /[A-Za-z]ray/; //Matches any letter
re = /[3-9][0-5]ray/; //Matches any digit

//Braces{} - Quantifiers
re = /hel{2}o/i; //Must occur exactly {m} amount of times

re = /hel{2,4}o/i; //Must occur exactly the range of {m}   amount of times 

re = /hel{2,}o/i; //Must occur atleast {m} times

// Parenthesis() - Grouping
re = /^([0-9][0-9]x){3}$/i; 

// String to match 
const str = '32x54x87X';


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