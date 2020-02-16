/* 9. Object Properties
Define function objectProperties(someObj)
Print every property and it's value. */
function objectProperties(someObj) {

    // it will grab all of the names of the fields in that object
// this means its getting the keys, not the values
  for(let key in someObj)
    {
        console.log(key+" : "+someObj[key]);
    }

} 






