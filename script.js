//Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  function generatePassword() {
    var newPassword = [];
    var length = 8;
    var passwordCharacters = [];
    var letters = "abcdefghijklmnopqrstuvwxyz".split("");
    var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var numbers = "1234567890".split("");
    var symbols = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~" + '"'.split("");

    //Sets the length of the password. Has a minimun length of 8
    var passwordLength = window.prompt(
      "How long would you like your password? (Must be between 8 and 128 characters)"
    );
    //If the password is shorter than 8 or longer than 128 characters, the function starts again until they pick a valid password length. Prompts come back as strings, so I convert it to a number incase it interferes with the for loop.
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Password must be between 8 and 128 characters long");
      return generatePassword();
    } else {
      length = Number(passwordLength);
    }
    //selects whether they want upper or lower case letters in their password. If they answer neither, they go back to the start of the function.
    var lower = window.confirm("Do you want lower case letters?");
    if (lower) {
      passwordCharacters.push(...letters);
    }
    var upper = window.confirm("Do you want Upper case letters?");
    if (upper) {
      passwordCharacters.push(...upperLetters);
    }
    if (!upper && !lower) {
      window.alert("Must contain either lower or upper case letters");
      return generatePassword();
    }
    var numerical = window.confirm("Do you want Numbers?");
    if (numerical) {
      passwordCharacters.push(...numbers);
    }
    var special = window.confirm("Do you want Special Characters?");
    if (special) {
      passwordCharacters.push(...symbols);
    }

    //Loops through the empty array newPassword with the length that the user inputs.
    //Generates random number
    //Sets the the random number as an index in the password Characters array
    //Sets this character in the new Password array.
    for (i = 0; i < length; i++) {
      var num = Math.floor(Math.random() * passwordCharacters.length);
      newPassword[i] = passwordCharacters[num];
    }

    var pass = newPassword.join("");
    return pass;
  }

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
