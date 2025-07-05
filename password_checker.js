/* TASK 2: Password Strength Checker Assignment

Your task is to write a JavaScript function that checks how strong a user's password is.

Create a function called checkPasswordStrength that takes one input: password (a string). It should return one of the following:

"This password has been used before. Please choose a new one." – if the password is in the usedPasswords array

"Too weak" – if the password is less than 6 characters OR doesn't include at least ONE of these symbols: &, %, !, ?

"Strong" – if the password is more than 8 characters AND includes at least TWO of these symbols: &, %, !, ?    (two unique symbols)

"Medium" – for any other case

// Example Outputs
checkPasswordStrength("abc");             // "Too weak"
checkPasswordStrength("password123!");    // "This password has been used before. Please choose a new one."
checkPasswordStrength("longpassword?");    // "Medium"
checkPasswordStrength("%myNewPass!");      // "Strong"
*/
const usedPasswords = ["password123!", "helloWorld!", "qwerty&"];

const checkPasswordStrength = (enteredPassword) => {
  let result = "";
  let uniqueSymbol = 0;

  const passwordArray = enteredPassword.split("");
  if (usedPasswords.includes(enteredPassword)) {
    result = "This password has been used before. Please choose a new one.";
  } else if (
    enteredPassword.length < 6 ||
    (!passwordArray.includes("&") &&
      !passwordArray.includes("%") &&
      !passwordArray.includes("!") &&
      !passwordArray.includes("?"))
  ) {
    result = "Too weak";
  } else {
    if (passwordArray.indexOf("&") !== -1) {
      uniqueSymbol++;
      //   result = `Your password has ${uniqueSymbol} unique symbol in it.`;
      result = "Medium";
      if (passwordArray.indexOf("%") !== -1) {
        uniqueSymbol++;
        // result = `Your password has ${uniqueSymbol} unique symbol in it.`;
        result = "Strong";
      } else if (passwordArray.indexOf("!") !== -1) {
        uniqueSymbol++;
        // result = `Your password has ${uniqueSymbol} unique symbol in it.`;
        result = "Strong";
      } else {
        return result;
      }
    } else if (passwordArray.indexOf("%") !== -1) {
      uniqueSymbol++;
      //   result = `Your password has ${uniqueSymbol} unique symbol in it.`;
      result = "Medium";
      if (passwordArray.indexOf("!") !== -1) {
        uniqueSymbol++;
        // result = `Your password has ${uniqueSymbol} unique symbol in it.`;
        result = "Strong";
      } else {
        return result;
      }
    } else if (passwordArray.indexOf("!") !== -1) {
      uniqueSymbol++;
      //   result = `Your password has ${uniqueSymbol} unique symbol in it.`;
      result = "Medium";
      if (passwordArray.indexOf("?") !== -1) {
        uniqueSymbol++;
        // result = `Your password has ${uniqueSymbol} unique symbol in it.`;
        result = "Strong";
      } else {
        return result;
      }
    } else if (passwordArray.indexOf("?") !== -1) {
      uniqueSymbol++;
      //   result = `Your password has ${uniqueSymbol} unique symbol in it.`;
      result = "Medium";
    } else {
      return result;
    }
    return result;
  }
  return result;
};

console.log(checkPasswordStrength("qwerty&"));
console.log(checkPasswordStrength("p&1!d"));
console.log(checkPasswordStrength("passuiwefiuhw"));
console.log(checkPasswordStrength("passuiwefiuhw"));
console.log(checkPasswordStrength("passuief!uhw"));
console.log(checkPasswordStrength("passw123&%"));
console.log(checkPasswordStrength("&!%%suief!uhw"));
