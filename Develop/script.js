// Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;
// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

var generatePassword = function () {
  var newPassword = [];
  var passwordCharacters = [];
  var letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  //How do I set the length of an empty array?
  var passwordLength = window.prompt(
    "How long would you like your password? (Must be at least 8 characters)"
  );
  if (passwordLength < 8) {
    window.prompt("Password must be at least 8 characters");
  }
  var lower = window.confirm("Do you want lower case letters?");
  if (lower) {
    passwordCharacters.push(...letters);
  }
  for (i = 0; i > passwordLength; i++) {
    newPassword[i] =
      passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
  }
  console.log(newPassword);
};
generatePassword();
