let val;

// Number to String 
val = String(555);
val = String(4+4);

// Bool to String 
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1,2,3,4]);


// Conversion to Numbers
//String to Numbers 

val = Number('5');



// toString();
val = (2).toString();
val = (true).toString();
val = (new Date).toString();
val = ([1,2,3,4]).toString();

console.log(val);
console.log(typeof val);
console.log(val.length);