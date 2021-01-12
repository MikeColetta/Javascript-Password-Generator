// Assignment Code
var generateBtn = document.querySelector("#generate");

//Character arrays
var specialChar = [' !”#$%&’()*+,-./:;<=>?@[\]`{|}~']
var numericChar = ['0123456789']
var upperCaseChar = ['ABCDEFGHIJKLMNOPQRSTUVWXYZ']
var lowerCaseChar = ['abcdefghijklmnopqrstuvwxyz']
var allChosenChar = [""]

//ADD CONSOLE LOGS

//Password lengths
const passwordMaxLength = 128
const passwordMinLength = 8

//Gets password criteria.

//Gets password length
function generatePassword () {
  var passwordLength = prompt("How long is your password?");

  //If password is not between 8 - 128 characters
  if (passwordLength<passwordMinLength || passwordLength>passwordMaxLength || isNaN(passwordLength)) {
    alert("Password is not between 8 - 128 characters!");
    return ""
  }
  
  //Asks and adds lowercase if true
  var hasLowercase = confirm("Do you want lowercase?");
  if (hasLowercase)  {
    allChosenChar += lowerCaseChar;
    console.log(allChosenChar)
  }
  
  //Asks and adds uppercase if true
  var hasUppercase = confirm("Do you want uppercase?");
  if (hasUppercase) {
    allChosenChar += upperCaseChar;
    console.log(allChosenChar)
  }
  
  //Asks and adds numbers if true
  var hasNumbers = confirm("Do you want numbers?");
  if (hasNumbers) {
    allChosenChar += numericChar;
    console.log(allChosenChar)
  }

  //Asks and adds special characters if true
  var hasSpecChar = confirm("Do you want special characters?");
  if (hasSpecChar) {
    allChosenChar += specialChar;
    console.log(allChosenChar)
  }
  
  var password = ""
  console.log(password)

  //Randomizes password based on character criteria
  for(var i=0; i<passwordLength; i++) {
    var randomIndex = Math.floor(Math.random()*allChosenChar.length);
    password += allChosenChar[randomIndex];
    }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  console.log(password)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);