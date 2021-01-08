// Assignment Code
var generateBtn = document.querySelector("#generate");

//character arrays
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*"]
var numericChar = [0,1,2,3,4,5,6,7,8,9,]
var upperCaseChar = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowerCaseChar = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var allChosenChar = []

//password lengths
const passwordMaxLength = 128
const passwordMinLength = 8

// console.log(allChosenChar.concat(specialChar, numericChar, upperCaseChar, lowerCaseChar))

// console.log(specialChar)
// console.log(numericChar)
// console.log(lowercaseChar)
// console.log(uppercaseChar)

//gets password criteria.

//gets password length
function generatePassword () {
  var passwordLength = prompt("How long is your password?");

  //if password is not between 8 - 128 characters
  if (passwordLength<passwordMinLength || passwordLength>passwordMaxLength) {
    alert("Password is not between 8 - 128 characters!");
    return ""
  }
  
  //asks and adds lowercase if true
  var hasLowercase = confirm("Do you want lowercase?");
  if (hasLowercase = true)  {
    allChosenChar += lowerCaseChar;
  }
  
  //asks and adds uppercase if true
  var hasUppercase = confirm("Do you want uppercase?");
  if (hasUppercase = true) {
    allChosenChar += upperCaseChar;
  }
  
  //asks and adds numbers if true
  var hasNumbers = confirm("Do you want numbers?");
  if (hasNumbers = true) {
    allChosenChar += numericChar;
  }

  //asks and adds special characters if true
  var hasSpecChar = confirm("Do you want special characters?");
  if (hasSpecChar = true) {
    allChosenChar += specialChar;
  }
  
  var password = ""

  //randomizes passoword based on character criteria
  for(var i=0; i<passwordLength; i++) {
    var randomIndex = Math.floor(Math.random()*allChosenChar.length);
    password+=allChosenChar[randomIndex]
    }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);