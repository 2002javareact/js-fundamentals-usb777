/* 1. Fibonacci
Define function: fib(n) 
Return the nth number in the fibonacci sequence. */
function fib(n) 
{
    if (n <= 1) 
      { return 1 }

      else 
      {   
           return fib(n - 1) + fib(n - 2) 
      }

}



console.log(  fib(11) ) ;
