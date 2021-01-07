// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"]
var numericChar = [0,1,2,3,4,5,6,7,8,9,]
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var allChosenChar = []

//can I make an array without typing every number 1-128 out?
const passwordMaxLength = 128
const passwordMinLength = 8


// console.log(specialChar)
// console.log(numericChar)
// console.log(lowercaseChar)
// console.log(uppercaseChar)

//select criteria using ids from the html

//ask password length function
 
//password criteria (Lowercase? Uppercase? Numbers? Special Characters?)

//validate character input
function generatePassword () {
  var passwordLength = prompt("How long is your password?")

  if (passwordLength<passwordMinLength || passwordLength>passwordMaxLength) {
    alert("Password is not between 8 - 128 characters!")
    return ""
  }

  var hasLowercase = confirm("Do you want lowercase?")
  var hasUppercase = confirm("Do you want uppercase?")
  var hasNumbers = confirm("Do you want numbers?")
  var hasSpecChar = confirm("Do you want special characters?")
  var password = ""

  for(var i=0; i<passwordLength; i++) {
    var randomIndex = Math.floor(Math.random()*lowerCaseChar.length)
    password+=lowerCaseChar[randomIndex]
    }
  return password
}

Math.random


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
