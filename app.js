document.write("<h1>Chapter : 21 to 25</h1> ");

document.write("<h2>STRING METHODS</h2> ");


//Question 01 : Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

document.write("<h3>Question 01 :</h3> ");


const firstName = prompt("Enter your first name:");
const lastName = prompt("Enter your last name:");

const fullName = firstName + " " + lastName;

document.write("Hello, " + fullName + "! Welcome!");


//Question 02 :  Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

document.write("<h3>Question 02 :</h3> ");

const mobileModel = prompt("Enter your favorite mobile phone model:");

const inputLength = mobileModel.length;

document.write("Your favorite mobile phone model is: " + mobileModel + "\nLength of input: " + inputLength + " characters.");

//Question 03 :  Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .


document.write("<h3>Question 03 :</h3> ");

// Word to search in
const word = "Pakistani";

// Find the index of letter 'n'
const index = word.indexOf('n');

document.write("The index of 'n' in the word 'Pakistani' is: " + index);

//Question 04 : Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser. 

document.write("<h3>Question 04 :</h3> ");

const word1 = "Hello World";
const lastIndex = word1.lastIndexOf('l');
document.write("The last index of 'l' in the word 'Hello World' is: " + lastIndex);


//Question 05 : Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

document.write("<h3>Question 05 :</h3> ");



const word2 = "Pakistani";
const character = word2.charAt(3);
document.write("The character index  is '3' in the word 'Pakistani' is: " +character );

//Question 06 :  Repeat Q1 using string concat() method.

document.write("<h3>Question 06 :</h3> ");

const firstName1 = prompt("Enter your first name:");
const lastName1 = prompt("Enter your last name:");

const fullNam1e = firstName1.concat(" ", lastName);

document.write("Hello, " + fullName + "! Welcome!");


//Question 07 : Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

document.write("<h3>Question 07 :</h3> ");

let nameOfCity="Hyder" ;
let changeChar=nameOfCity.replace("Hyder", "Hyderabad");
document.write("Original sentence: " + nameOfCity+ "\nUpdated sentence: " +changeChar );


//Question 08 : Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.

document.write("<h3>Question 08 :</h3> ");


const sentence = "Ali and Sami are best friends. They play cricket and football together.";

const updatedSentence = sentence.replace(/and/g, "&");

document.write("Original sentence: " + sentence + "\nUpdated sentence: " + updatedSentence);

//Question 09 : Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

document.write("<h3>Question 09 :</h3> ");

const strValue = "472";

const numValue = Number(strValue);


document.write("String value: " + strValue + "\nType of strValue: " + typeof strValue +
      "\n\nNumber value: " + numValue + "\nType of numValue: " + typeof numValue);


//Question 10 : Write a program that takes user input. Convert and
// show the input in capital letters.

document.write("<h3>Question 10 :</h3> ");


const userInput = prompt("Enter some text:");
const upperCaseInput = userInput.toUpperCase();
document.write("Your input in capital letters: " + upperCaseInput);

// Question 11 : Write a program that takes user input. Convert and
// show the input in title case.

document.write("<h3>Question 11 :</h3> ");
const userInput1 = "javascript";

const titleCaseInput = userInput1.charAt(0).toUpperCase()  + userInput1.slice(1).toLowerCase();

// Display the result
document.write("Your input in title case: " + titleCaseInput);

// Question 12 :  Write a program that converts the variable num tostring.
// var num = 35.36 ; Remove the dot to display “3536” display in your browser.


document.write("<h3>Question 12 :</h3> ");
// Variable num
var num = 35.36;

// Convert num to string
var numString = num.toString();

// Remove the dot from the string
var result = numString.replace('.', '');

// Display the result
document.write("The result is: " + result);


// Question 13 : Write a program to take user input and store username in a variable. 
// If the username contains any special symbol among [@ . , !],
// prompt the user to enter a valid username. For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

document.write("<h3>Question 13 :</h3> ");


// Function to check if the username is valid
function isValidUsername(username) {
    // Define special characters
    const specialCharacters = ['@', '.', '!', ','];
    
    // Check if the username contains any special characters
    for (let i = 0; i < specialCharacters.length; i++) {
        if (username.includes(specialCharacters[i])) {
            return false; // Invalid username
        }
    }
    return true; // Valid username
}

// Take user input for the username
let username = prompt("Enter your username:");

// Validate the username
while (!isValidUsername(username)) {
    username = prompt("Invalid username! Please enter a valid username (no special symbols allowed):");
}

// Display the valid username
document.write("Your username is: " + username);


// Question 14 : . You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, 
// prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, 

document.write("<h3>Question 14 :</h3> ");


const L = ["cake", "apple pie", "cookie", "chips", "patties"];

const userInput2 = prompt("Enter the item you want to search for:");

const lowerCaseInput = userInput2.toLowerCase();

if (L.some(item => item.toLowerCase() === lowerCaseInput)) {
    document.write("The item '" + userInput2 + "' is found in the list.");
} else {
    document.write("The item '" + userInput2 + "' is not found in the list.");
}


// Question 15 :Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII table at the end of this document.

document.write("<h3>Question 15 :</h3> ");

// Function to validate the password
function isValidPassword(password) {
    // Check if the password is at least 6 characters long
    if (password.length < 6) {
        return false;
    }
    // Check if the password starts with a number
    if (!isNaN(password.charAt(0))) {
        return false;
    }
    // Check if the password contains at least one alphabet and one number
    const hasAlphabet = /[a-zA-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);

    return hasAlphabet && hasNumber; // Return true if both conditions are met
}

// Take user input for the password
let password = prompt("Enter your password:");

// Validate the password
while (!isValidPassword(password)) {
    password = prompt("Invalid password! Please enter a valid password that meets the requirements:");
}

// Display the valid password
alert("Your password is valid: " + password);


// //Question 16 : Write a program to convert the following string to an
// array using string split method. var university = “University of Karachi”;
// Display the elements of array in your browser.

document.write("<h3>Question 16 :</h3> ");

var university = "University of Karachi";

var universityArray = university.split(' ');

document.write("The elements of the array are:\n" + universityArray.join('\n'));

//Question 17 : Write a program to display the last character of a user input.

document.write("<h3>Question 17 :</h3> ");
// Take user input
const userInput3 = prompt("Enter some text:");

// Check if the input is not empty
if (userInput3) {
    // Get the last character of the input
    const lastCharacter = userInput.charAt(userInput.length - 1);

    // Display the last character
    document.write("The last character is: " + lastCharacter);
} else {
    document.write("No input provided!");
}

//Question 18 :You have a string “The quick brown fox jumps over the lazy dog”. 
//Write a program to count number of occurrences of word “the” in given string.

document.write("<h3>Question 18 :</h3> ");

const sentence1 = "The quick brown fox jumps over the lazy dog";
const lowerCaseSentence = sentence1.toLowerCase();
const wordsArray = lowerCaseSentence.split(' ');
let count = 0;
for (let word of wordsArray) {
    if (word === "the") {
        count++;
    }
}
document.write("The number of occurrences of the word 'the' is: " + count);






