console.log(bubbleSortCourse([2, 5, 3, 22, 1, 7]));

// Bubble sort compares adjacent elements and swaps them if they are in the wrong order.
// This simple algorithm performs poorly in real world use and is used primarily as an educational tool. More efficient algorithms such as quicksort, or merge sort are used by the sorting libraries built into popular programming languages such as Python and Java.

// O(n^2)

function bubbleSortCourse(arr) {
    for (let i = 0; i < arr.length -1; i++){
        for (let j = arr.length - 1; j > i; j--){
            if (arr[j] < arr[j - 1]){
                let temp = arr[j];
                arr[j] = arr[j - 1];
                arr[j - 1] = temp;
            }
        }
    }
    return arr;
}

function bubbleSort(arr) {
    let loopCount = 0
    while (loopCount < arr.length - 1) {
        let changeCount = 0;
        while (changeCount < arr.length - loopCount - 1) {
            if (arr[changeCount] > arr[changeCount + 1]) {
                let temp = arr[changeCount];
                arr[changeCount] = arr[changeCount + 1];
                arr[changeCount + 1] = temp;
            }
            changeCount++
        }
        loopCount++;
    }
    return arr;
}