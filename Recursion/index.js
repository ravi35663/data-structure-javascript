/*
==> Divide and Conquer :-
    -> this pattern is designed to break large data sets into smaller chunks and 
       repeat the process for subsets of data .
    -> This pattern tremendously decreases the time complexity .
    -> few examples are: binary search, quick sort, merge sort ..etc

    -> Intimidating :- scary, fearful ..etc
    -> pitfalls : - issues, danger, difficulties ..etc
*/

/*
==> Recursion : -
	-> A function calls itself to find the desired result .
	-> There is always a base condition with recursion where it stops calling itself 
       and returns the initial result and based on that initial result the actual 
       result will be printed.
    -> When a function is called then that function is pushed into the call stack.
    -> once the function is executed then that function pops off from the call stack.
    -> In the stack everything is moved from top of the stack.
*/

/*
    Helper Method Recursion:
    ->  These kind of method used to collect somethings (like odd numbers, even number 
        .etc)
*/ 
function outer(input){
    var outerScopeVariable = [];
    function inner(inputVariable){
        // modify outerScopeVariable here
        inner(inputVariable--);
    }
    inner(input);
    return outerScopeVariable;
}
/*
==> Pure Recursion : -
	-> For arrays, use methods like slice, spread, concat that make copies of arrays 
       so you do not mutate them. 
    -> Remember that strings are immutable so you will need to spread, slice, substr 
       or substring to make copies of strings.
    -> To make copies of objects use Object.assign or spread operator.
*/
function collectOddValues(arr){// pure recursion
	let odd = [];
    if(!arr.length){
    	return odd;
    }
    if(arr[0]%2 !==0 ){
        odd.push(arr[0]);
    }
    odd = odd.concat(collectOddValues(arr.slice(1)));
    return odd;
}
/*
==> Pitfall of recursion : 
	-> No base case
	-> Forgetting to return or returning the wrong thing
	-> stack overflow

==> Maximum call stack size exceeded: -
    -> we get this error when there is infinite functions pushed into the stack then 
       this issue occurs 
	-> It is also known as stack overflow.
	-> It is RangeError
*/
