// Assignment code here
function generatePassword() {
  // ask user for length of password
  var promptLength = window.prompt("Please choose the length of your password. Enter a value between 8 characters and 128 characters long.");
  promptLength = parseInt(promptLength);

  // if input is less than 8 or greater than 128 return generatePassword()
  if (promptLength >= 8 && promptLength <= 128){
  } else {
  window.alert("You need to provide a valid answer! Please try again.");
  return generatePassword();
  };

  // ask user for password criteria
  var confirmLowerCase = window.confirm("Would you like lower case letters to be included in your password?");
  var confirmUpperCase = window.confirm("Would you like upper case letters to be included in your password?");
  var confirmNumeric = window.confirm("Would you like numbers to be included in your password?");
  var confirmSpecialChar = window.confirm("Would you like special characters to be included in your password?");
  
  // password criteria object
  var confirmOptions = {
    length: promptLength,
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numeric: "0123456789",
    specialchar: "!@#$%^&*()_+~`|}{[]\\:;?><,./-="
  };
  var criteria = [];

  // if statements to push options to an array
  if (promptLength >= 8 || promptLength <=128) {
    //logic to push to array
    criteria.push(confirmOptions.length)
  }
  if (confirmLowerCase === true) {
    //logic to push to array
    criteria.push(confirmOptions.lowercase)
  }
  if (confirmUpperCase === true) {
    //logic to push to array
    criteria.push(confirmOptions.uppercase)
  }
  if (confirmNumeric === true) {
    //logic to push to array
    criteria.push(confirmOptions.numeric)
  }
  if (confirmSpecialChar === true) {
    //logic to push to array
    criteria.push(confirmOptions.specialchar)
  }
  console.log(criteria);
};

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
