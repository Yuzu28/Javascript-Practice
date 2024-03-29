function cipher(str) {
    // Split str into a character array 
    return str.split('')
    // Iterate over each character in the array
      .map.call(str, function(char) {
        // Convert char to a character code
        x = char.charCodeAt(0);
        // Checks if character lies between A-Z
        if (x < 65 || x > 90) {
          return String.fromCharCode(x);  // Return un-converted character
        }
        //N = ASCII 78, if the character code is less than 78, shift forward 13 places
        else if (x < 78) {
          return String.fromCharCode(x + 13);
        }
        // Otherwise shift the character 13 places backward
        return String.fromCharCode(x - 13);
      }).join('');  // Rejoin the array into a string
  }
  
  
  cipher("Genius without education is like silver in the mine'".toUpperCase());

  
// outcome from Console


'TRAVHF JVGUBHG RQHPNGVBA VF YVXR FVYIRE VA GUR ZVAR'