/*
    String Tokenization:
    ->  Tokenizing a string denotes spiltting a string with respect to some delimeter(s).

    e.g.
    input: Today is a sunny day.
    output: 'Today', 'is', 'a', 'sunny', 'day'
*/

// Create our own string tokenizer function: single character delimeter
function stringTokeniser(str,delimeter){   
    const result = [];
    let word = '';
    for(let i=0;i<str.length;i++){
        if(str[i] === delimeter){
            result.push(word)
            word = ''
        }else{
            word += str[i];
        }
    }
    result.push(word)
    return result
}
const str = "Hello, How are you?"
const delimeter = 'q'
const token = stringTokeniser(str,delimeter);
console.log("Token is :",token);