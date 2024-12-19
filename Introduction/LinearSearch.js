// Pseudocode:
// LinearSearch(array, n):
//     for i from 0 to array.length - 1:
//         if (array[i] == n){
//             return i;
//         }
//     return -1


// O(n)


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(linearSearch(arr, 10));

function linearSearch(arr, n){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == n){
            return i;
        }
    }
    return -1;
}