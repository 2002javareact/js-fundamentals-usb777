/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */


function substring(someStr, startIndex, endIndex) {
   let newString = ""
   try {
    
    if (startIndex<endIndex) {
    for (var i=startIndex; i<endIndex;i++)
        {
           newString += someStr[i] ;
        }
    }
    else if (startIndex>endIndex) 
        {
        for (var i=endIndex; i<startIndex;i++)
            {
               newString += someStr[i] 
            }
        }
    
        else if (startIndex==endIndex) 
    
        {
            newString = someStr[startIndex]
        }

       
      }catch (err) 
    {
        console.log("Name of Error: " + err.name+ "  Error message: " + err.message);
    }

    return newString;
}

console.log(substring("4467", -3, 3));