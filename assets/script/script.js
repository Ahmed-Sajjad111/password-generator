// Assignment code here
function generatePassword() {
  // ask user for length of password
  var promptLength = window.prompt("Please choose the length of your password. Enter a value between 8 characters and 128 characters long.");
  // if input is less than 8 or greateer than 128 return generatePassword()
  if (promptLength < 8 || promptLength > 128){
    window.alert("You need to provide a valid answer! Please try again.");
    return generatePassword();
  }
  // ask user for password criteria
  var confirmLowerCase = window.confirm("Would you like lower case letters to be included in your password?");
  var confirmUpperCase = window.confirm("Would you like upper case letters to be included in your password?");
  var confirmNumeric = window.confirm("Would you like numbers to be included in your password?");
  var confirmSpecialChar = window.confirm("Would you like special characters to be included in your password?");
  // password criteria object
  var confirmOptions = {
    length: promptLength,
    lowercase: confirmLowerCase,
    uppercase: confirmUpperCase,
    numeric: confirmNumeric,
    specialchar: confirmSpecialChar
  };

  var optionsArray = []

  // if statements to push options to an array
  if (confirmLowerCase === true) {
    //logic to push to array
  }
  if (confirmUpperCase === true) {
    //logic to push to array
  }
  if (confirmNumeric === true) {
    //logic to push to array
  }
  if (confirmSpecialChar === true) {
    //logic to push to array
  }


}

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
