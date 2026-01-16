//console.log("har\"".length);

// include function means string contains specific word anywhere or not 
// this is also case sensitive 
// let text = "JavaScript is fun";
// console.log(text.includes("Java"));   // true
// console.log(text.includes("script")); // false (case-sensitive)
// console.log(text.includes("fun"));    // true

//startswith means it checks whether the string starts with the given value or not 
// let text = "JavaScript is fun";
// console.log(text.startsWith("Java")); // true
// console.log(text.startsWith("Script")); // false
// console.log(text.startsWith("Script", 4)); // true

//endswith means it checks whether the string ends with the given value or not 
// let text = "JavaScript is fun";
// console.log(text.endsWith("fun"));  // true
// console.log(text.endsWith("Java")); // false

// let name="PRAKHAr";
// console.log(name.toLowerCase());

// let str="Please give RS 1000";
// console.log(str.slice(12));

// // second way to do this interview method 
// let statement = "please give me Rs 1000";
// let amount = statement.match(/\d+/);
// console.log(amount[0]);