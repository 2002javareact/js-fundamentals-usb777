/* 2. Bubble Sort
Define function: bubbleSort(numArray)
Use the bubble sort algorithm to sort the array.
Return the sorted array. */
function bubbleSort(numArray) 
{
    var arr_length = numArray.length, i, j;

    for (i=0; i < arr_length; i++)
    {
        for (j=0, stop=arr_length-i; j < stop; j++)
        {
            if (numArray[j] > numArray[j+1])
            {
                 // swapping array element
                var temp = numArray[j];
                numArray[j] = numArray[j+1];
                numArray[j+1] = temp;
            }
        }
    }
    return numArray
}


var arr = [1,4,2,7,4,100 , 500,3, 77, 1]

console.log(arr);


console.log(bubbleSort(arr));  // Here we are sorting array
