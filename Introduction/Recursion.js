
console.log(arrayOfArray([[[["a", [["b",["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]]));

// Practice
// Write a function that takes an integer N as an input and returns the Nth number in Fibonacci Sequence

function fibonacci(num) {
    if (num == 1) return 0;
    if (num == 2) return 1;
    return fibonacci(num - 2) + fibonacci(num - 1);
}



// Practice
// Write a function that collects all value in an array of arrays and return an array of values collected.
// Ex:
// let arr = [[[["a", [["b",["c"]], ["d"]]], [["e"]], [[["f", "g", "h"]]]]]]; return [a, b, c, d, e, f, g, h]

function arrayOfArray(arr1) {
    let result = [];
    helper(arr1);
    return result;
    
    function helper(arr2){
        for (let i = 0; i< arr2.length; i++){
            if (Array.isArray(arr2[i])){
                helper(arr2[i]);
            }
            else{
                result.push(arr2[i]);
            }
        }
    }
}