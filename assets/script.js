//Assignment code
var generateBtn = document.querySelector("generate")

function randomInt(min, max) {  // program to get a random item from an array and find the min and max values
  if (!max) {
    max = min
    min = 0
  }
  // Generates a random number between two numbers in JS.  https://www.learn-codes.net/javascript/how-to-create-a-random-number-between-a-range-javascript/
  var rand = Math.random() //gets a random number between (0-1 ex. 0 to 0.99999 1 is excluded)
  return Math.floor(min*(1 - rand) +rand*max) //floor truncates the decimal and gives us back a whole number
}
   //get random item from the array
function getRandomItem(list) {
  return list[randomInt(list.length)]
}
// generate password 8-128 characters
function generatePassword() {
  while (true) {
  
    var userInput = window.prompt("How long do you want your password to be (8-128)?") 
  //user exited the prompt
    if (userInput === null) {
    return
    }
  
    var passwordLength = parseInt(userInput) //parses a string argument and returns a integer

    if (isNaN(passwordLength)) { // NaN - not a number (because parseInt gives us a integer)
      window.alert("That's not a number!") 
    } else if (passwordLength < 8 || passwordLength > 128) { //if password is < than 8 or password is > 128
      window.alert("Invalid password length.  The length should be between 8 and 128 characters.")
    } else {
      break
    }
  }
  //input variables and window confirm to disply the string I want in the display box
  var userWantsNumbers = window.confirm("Would you like to include numbers in your password?")
  var userWantsSymbols = window.confirm("Would you like to include symbols in your password?")
  var userWantsLowercase = window.confirm("Would you like to include lowercase letters in your password?")
  var userWantsUppercase = window.confirm("Would you like to include uppercase letters in your password?")

  //array
  var numberList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
  var uppercaseList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  var lowercaseList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  var symbolList = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.']
  var optionsList = [] 
  

// use array push method
  if (userWantsNumbers === true) {
  optionsList.push(numberList)
  }
  if (userWantsSymbols === true) {
    optionsList.push(symbolList)
  }
  if (userWantsLowercase === true) {
    optionsList.push(uppercaseList)
  }
  if (userWantsUppercase === true) {
    optionsList.push(uppercaseList)
  }

  var generatedPassword = ""

  for (var i = 0; i < passwordLength; i++) {
    var randomList = getRandomItem(optionsList)
    var randomChar = getRandomItem(randomList)
    generatedPassword += randomChar
  }

  return generatedPassword
}
// Write password to the #password input
  function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  if (password) {
    passwordText.value = password;
  }

}

//Add event listener to generate button
generate.addEventListener("click", writePassword);
