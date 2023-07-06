// Assignment code here
function genteratePassword () {
var number = '0123456789';
var upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lowerCase = 'abcdefghijklmnopqrstuvwxyz';
var specialCharacters = '!@#$%^&*()_+{}[]=?,.<>';
var numberResponse = '0123456789';
var upperCaseResponse = 'FGHIJKLMNOPQRSTUVWXYZ'
var lowerCaseResponse = 'bcdefghijklmnopqrstuvwxyz'
var specialCharactersResponse = '!@#$%^&*()_+{}[]=?,.<>'




number = window.prompt("Would you like to include numbers in your passowrd? Y / N");


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
}