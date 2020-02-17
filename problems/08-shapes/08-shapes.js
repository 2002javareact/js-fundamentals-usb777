/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape,  height = 5, character) {
 
  let sym = ""
  this.h = height
  if (h<=0) {h =1}

  switch (shape) 
  {
    case "Square" :   {

      //square
  
    let symSQuare=""
    
    for (let  i=0; i<h; i++) 
    {
      sym = ""
 
      for (let j=0;j<h;j++)
         { 
          sym=sym+"#"
          if (j===(h-1))
          {
            symSQuare = sym
          }

        }
     
  
    
    console.log( symSQuare);
}
      
      
      break;}

    case "Triangle" :   {  
                            for (let  i=0; i<h; i++) 
                            {
        
                              sym=sym + character          
                               console.log(sym);
                             }break;
                          }
    case "Diamond" :   {
      

      
var x, y, space = "",
 height = 6,
m = height - 1;
for (x = 1; x <= h; x++)
{
  for (y = m; y >= 1; y--) 
  {
    space = space + (" ");
  } //y
    m--;
   for (let k = 1; k <= x * 2 - 1; k++) 
      {
        sym = sym + character
      }
    console.log(space + sym)
    space = '';
    sym = "";
} //x
      
      
      
      break;}


    default :  {console.log("Not good shape!"); break;}



  } //switch
  
}


printShape("Triangle", 4, "*");

printShape("Square", 5, "@");

printShape("Diamond", 4, "*");