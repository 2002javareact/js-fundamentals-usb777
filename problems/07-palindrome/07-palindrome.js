/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
  
    var re = /[^A-Za-z0-9]/g; // regular expression's pattern
    someStr = someStr.toLowerCase().replace(re, '');
    var len = someStr.length;
    for (var i = 0; i < len/2; i++) 
    {
      if (someStr[i] !== someStr[len - 1 - i]) 
        {
        return false;
        } //if
    } //for
 return true;
}





console.log("Is Palyndrome ? " + isPalindrome("Abba"));