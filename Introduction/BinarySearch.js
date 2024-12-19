// Binary search is a search algorithm that finds the position of a target value within a sorted array

// O(log n)

let arr = [1, 2, 3, 9, 16, 27, 33, 89, 96, 123, 189, 255, 333]; // sorted array
console.log(binarySearch(arr, 2));


function binarySearch(arr, n) {
    let min = 0;
    let max = arr.length - 1;
    while (min <= max){
        let middle = Math.floor((min + max) / 2);
        if (n == arr[middle]){
            return 1;
        }
        else if (n > arr[middle]){
            min = middle + 1;
        }
        else{
            max = middle - 1;
        }
    }
    return -1;
}