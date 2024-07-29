/*
==> Object :-
    -> An object is unsorted data structure which store data in key-value pairs
    const person = {
	            name:”ravi”,
                age:25,
                favNum:[1,2,33,45]
    }
    -> use objects when order is not required .
    -> when you need fast access/insertion/removal use an object. 
    -> access, insertion and removal happens in O(1) complexity
    -> searching O(N)
    -> Object.keys(person)     		-> O(n) => [“name”,”age”,”favNum”]
    -> Object.values(person)   		-> O(n) => [“ravi”,25,[1,2,33,45]]
    -> Object.entries(person)  		-> O(n) => [[“name”,”ravi”],[“age”,25],[“favNum”,[1,2,33,45]]]
    -> person.hasOwnProperty(proName) 	-> O(1) => 
    -> person.hasOwnProperty(“name”) 	-> true
    -> person.hasOwnProperty(“hobbies”)- > false  (accessing keys)
*/

/*
==> Array : -
    -> Example arr = [10,20,30,40]
    -> use array if you required items in an order
    -> Accessing Element Time Complexity : O(1)
    -> removal element : it depends from where to remove
    -> insertion element : it depends from where to insert
    -> searching element : O(n)
    -> push : O(1)
    -> pop : O(1)
    -> shift : O(n)
    -> unshift:O(n)
    -> concat: 	O(n)
    -> slice: O(n)
    -> splice: 	O(n)
    -> sort: O(n logn)
    -> map: O(n)
    -> filter: 	O(n)
    -> forEach:	O(n)
    -> reduce : O(n)
*/