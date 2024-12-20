// The principle of selection sort is - select the smallest value in unsorted array, and then swap it with the left most value in this unsorted array.
// O(n^2)


let arr = [14, -4, 17, 6, 22, 1, -5];

console.log(selectionSort(arr));

function selectionSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        let minIndex = i;
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }
    return arr;
}