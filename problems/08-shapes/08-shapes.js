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
      

  
  //var width = 11;
  var num = (h+1)/2;
  
  for (let i = num-1; i >-num; i--) {
  for (let j = num-Math.abs(i); j < num; j++) {
    sym+=' '
    }
      for (let j = 0; j < 2*(num-Math.abs(i))-1; j++) 
      { //2*num-(2*Math.abs(i) +1) simplified to 2*(num-Math.abs(i))-1
        sym+=character;
      }
        sym+="\n";
      }
          console.log(sym);
      
      
      
      break;}


    default :  {console.log("Not good shape!"); break;}



  } //switch
  
}


printShape("Triangle", 4, "*");

printShape("Square", 5, "@");

printShape("Diamond", 6, "*");

/*
var stars='';
var width = 11;
var num = (width+1)/2;
for (let i = num-1; i >-num; i--) {
for (let j = num-Math.abs(i); j < num; j++) {
stars+=' '
}
for (let j = 0; j < 2*(num-Math.abs(i))-1; j++) { //2*num-(2*Math.abs(i) +1) simplified to 2*(num-Math.abs(i))-1
stars+="*";
}
stars+="\n";
}
console.log(stars);

*/