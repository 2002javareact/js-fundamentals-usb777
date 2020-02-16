/* 11. Splice Element
Define function spliceElement(someArr, index)
Splice the element at the provided index in the array.
*/
function spliceElement(someArr, index) {

    someArr.splice(index, 0, "element"+index);
  return someArr ;
}

var elements = ["element1", "element2", "element3", "element4"];

console.log( spliceElement(elements, 3)  );
