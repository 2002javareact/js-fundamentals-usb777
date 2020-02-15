/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) 
{
    // ==split()== method to return a new array
    // ==reverse()== method to reverse the new created array
    // ==join()== method to join all elements of the array into a string
    return someStr.split("").reverse().join("");
   
}


console.log(reverseStr("someThing") ) ; 

