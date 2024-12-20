// Insertion sort is a little bit more efficient than bubble sort in practice. Theoretically, they have the same Big O Value O(n^2).
// The principle of insertion sort is simple. Keeping inserting a new value into a sorted array. Insert it to the correct spot so the sorted array remains sorted.
// O(n^2)


console.log(insertionSortCourse([14, -4, 17, 6, 22, 1, -5]));

function insertionSortCourse(arr){
    for (let j = 1; j < arr.length; j++){
        let key = arr[j];
        let i = j - 1;
        while (i >= 0 && arr[i] > key){
            arr[i+1] = arr[i];
            i -= 1;
        }
        arr[i+1] = key;
    }
    return arr;
}


function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for (let j = i; j > 0; j--) {
            if (arr[j] < arr[j - 1]) {
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
            else {
                break;
            }
        }
    }
    return arr;
}