const NUMBER = '0123456789';
const UPPER_CASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER_CASE = 'abcdefghijklmnopqrstuvwxyz';
const SPECIAL_CHARACTERS = '!@#$%^&*()_+{}[]=?,.<>';

// Assignment code here
function generatePassword() {
  var passwordCharacterSet = ''
  const passwordLength = window.prompt("How long is your password? (8-124)");
// Below is a function to direct the user in making sure the passwork length is between 8 and 124 characters.
  if (isNaN(passwordLength)) {
    window.prompt("Not a number! How long is your password? (8-124)");
    return
  }
  if (passwordLength < 8) {
    alert("Password length must be between 8 and 124")
    return "Bad input. Try again";
  }
  if (passwordLength > 124) {
    alert("Password length must be between 8 and 124")
    return "Bad input. Try again";
  }

  const lowerCasePrompt = window.prompt("Would you like to include lower case letters in your password? Y / N");
// Below is the function to verify the input. You will see the same function with the respective const var.
  if (lowerCasePrompt != "Y" && lowerCasePrompt != "N") {
    alert("Answer must be a Y or N")
    return "Bad input. Try again";
  }


  if (lowerCasePrompt === 'Y') {
    passwordCharacterSet += LOWER_CASE
  }

  const upperCasePrompt = window.prompt("Would you like to include upper case letters in your password? Y / N");

  if (upperCasePrompt === 'Y') {
    passwordCharacterSet += UPPER_CASE
  }

  if (upperCasePrompt != "Y" && upperCasePrompt != "N") {
    alert("Answer must be a Y or N")
    return "Bad input. Try again";
  }

  const numberPrompt = window.prompt("Would you like to include numbers in your password? Y / N");

  if (numberPrompt === 'Y') {
    passwordCharacterSet += NUMBER
  }

  if (numberPrompt != "Y" && numberPrompt != "N") {
    alert("Answer must be a Y or N")
    return "Bad input. Try again";
  }

  const specialCharactersPrompt = window.prompt("Would you like to include special characters in your password? Y / N");

  if (specialCharactersPrompt === 'Y') {
    passwordCharacterSet += SPECIAL_CHARACTERS
  }

  if (specialCharactersPrompt != "Y" && specialCharactersPrompt != "N") {
    alert("Answer must be a Y or N")
    return "Bad input. Try again";
  }

  if (passwordCharacterSet == '') {
    alert("You didn't add a character set!")
    return
  }

  var password = ""
  //generate a random character and add it to the password for the length
  for (var i = 0; i < passwordLength; i++) {
    password += passwordCharacterSet.charAt(Math.floor(Math.random() * passwordCharacterSet.length))
  }

  return password
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
