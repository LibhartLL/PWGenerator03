//const declaration are block-scoped, the can't be changed through reassignment
// the document.getElementById returns and element object representing placeholder.
// the addEventListener method attached an event handler to a doc 
//the document.querySelector returns the first element within the doc tha matches the generate selector
const specialCharacters = "!@#$%^&*+-./<>?~";
const generate = document.getElementById("generate")
// Add event listener to generate button
generate.addEventListener("click", writePassword)

// Write password to the #password placeholder
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password; 
}

// generate password prompts, initial prompts
function generatePassword() {
  var passwordLength = prompt("How long do you want your password, 8-128?")
  var numbers = confirm("Do you want numbers in your password?");
  var upperCase = confirm("Do you want Uppercase letters in your password?");
  var lowerCase = confirm("Do you want lowercase letters in your password?");
  var special = confirm("Do you want Special Characters in your password?");
  
  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;

  // Empty "" minimums for numbers, lowerCases, upperCases & specialCharacters
  var minimumNumber = "";
  var minimumUpperCase = "";
  var minimumLowerCase = "";
  var minimumSpecial = "";
  //Generator Password functions Math
  var functionArray = {
    getNumbers: function() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },
    getUpperCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },
    getLowerCase: function() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },
    getSpecial: function() {
      return special [Math.floor(Math.random() * specialCharacters.length)]
    }

};

  //if statements to check to make sure the user selected ok for all
  // Usees the minimums from above
  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }
  if (upperCase === true) {
    minimumUpperCase = functionArray.getUpperCase();
    minimumCount++;
  }
  if (lowerCase === true) {
    minimumLowerCase = functionArray.getLowerCase();
    minimumCount++;
  }
  if (special === true) {
    minimumSpecial = functionArray.getSpecial();
    minimumCount++;
  }

  //string variable for the loop for random characters
  var randomPasswordGenerated = "";
  //loop getting random characters
  //notes for statement, parseInt (paswordLength) will parse a string argument and return a integer
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    
    randomPasswordGenerated += randomNumberPicked;
    }

  //to make sure the Number, Uppercase, Lowercase and Special characters are added to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCase;
  randomPasswordGenerated += minimumUpperCase;
  randomPasswordGenerated += minimumSpecial;
  
  return randomPasswordGenerated; //presents the random password

} 



