// Assignment code here
function generatePassword() {
  // ask user for length of password
  var passLength = window.prompt("Please choose the length of your password. Enter a value between 8 characters and 128 characters long.");
  passLength = parseInt(passLength);

  // if input is less than 8 or greater than 128 return generatePassword()
  if (passLength >= 8 && passLength <= 128){
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
    length: passLength,
    lowercase: ["a"+"b"+"c"+"d"+"e"+"f"+"g"+"h"+"i"+"j"+"k"+"l"+"m"+"n"+"o"+"p"+"q"+"r"+"s"+"t"+"u"+"v"+"w"+"x"+"y"+"z"],
    uppercase: ["A"+"B"+"C"+"D"+"E"+"F"+"G"+"H"+"I"+"J"+"K"+"L"+"M"+"N"+"O"+"P"+"Q"+"R"+"S"+"T"+"U"+"V"+"W"+"X"+"Y"+"Z"],
    numeric: ["0"+"1"+"2"+"3"+"4"+"5"+"6"+"7"+"8"+"9"],
    specialchar: ['!'+'@'+'#'+'$'+'%'+'^'+'&'+'*'+'('+')'+'_'+'+'+'~'+'`'+'|'+'}'+'{'+'['+']'+'\\'+':'+';'+'?'+'>'+'<'+','+'.'+'/'+'-'+'=']
  };
  var characterPool = [];
  var finalPass = "";

  // if statements to push options to an array
  if (passLength >= 8 || passLength <=128) {
    //logic to push to array
    characterPool.push(confirmOptions.length)
  }
  if (confirmLowerCase === true) {
    //logic to push to array
    characterPool.push(confirmOptions.lowercase)
  }
  if (confirmUpperCase === true) {
    //logic to push to array
    characterPool.push(confirmOptions.uppercase)
  }
  if (confirmNumeric === true) {
    //logic to push to array
    characterPool.push(confirmOptions.numeric)
  }
  if (confirmSpecialChar === true) {
    //logic to push to array
    characterPool.push(confirmOptions.specialchar)
  }
  console.log(characterPool);
  //while loop to generate password
  while(finalPass < passLength) {
    
  }

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
