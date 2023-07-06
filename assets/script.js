// Assignment code here
function genteratePassword () {
var number = '0123456789';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var specialCharacters = '!@#$%^&*()_+{}[]=?,.<>';

var passwordCharacterSet=''


const passwordLength = window.prompt("How long is your password? (8-124)");

if(isNaN(passwordLength)){
  window.prompt("Not a number! How long is your password? (8-124)");
}

const lowerCasePrompt = window.prompt("Would you like to include lower case letters in your passowrd? Y / N");

if(lowerCasePrompt === 'Y') {
  passwordCharacterSet += lowerCase
}

const upperCasePrompt = window.prompt("Would you like to include upper case letters in your password? Y / N");

if(upperCasePrompt === 'Y') {
  passwordCharacterSet += upperCase
}

const numberPrompt = window.prompt("Would you like to include numbers in your password? Y / N");

if(numberPrompt === 'Y') {
  passwordCharacterSet += number
}

const specialCharactersPrompt = window.prompt("Would you like to include special characters in your password? Y / N");

if(specialCharactersPrompt === 'Y') {
  passwordCharacterSet += specialCharacters
}

if(passwordCharacterSet == ''){
  alert("You didn't add a character set!")
  return
}

var password = ""
//generate a random character and add it to the password for the length
for(var i = 0; i < passwordLength; i++){
  password += passwordCharacterSet.charAt(Math.floor(Math.random() * passwordCharacterSet.length))
}
console.log("WORKING", password)
return password
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = genteratePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
