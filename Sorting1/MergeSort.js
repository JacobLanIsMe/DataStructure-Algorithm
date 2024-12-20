// The principle of merge sort is quite simple. Take advantage of the fact that combining two sorted arrays has O(n) time complexity, using the pointer skill.
// This sorting algorithm is a classic example of "divide and conquer".

// O(nlogn)

let arr = [14, -4, 17, 6, 22, 1, -5];
console.log(mergeSort(arr));

function mergeSort(arr) {
    if (arr.length == 1) {
        return arr;
    }
    else {
        let middle = Math.floor(arr.length / 2);
        let leftArr = arr.slice(0, middle);
        let rightArr = arr.slice(middle, arr.length);
        return merge(mergeSort(leftArr), mergeSort(rightArr));
    }
}

function merge(arr1, arr2) {
    let i = 0; // arr1 pointer
    let j = 0; // arr2 pointer
    let newArr = [];
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr.push(arr1[i]);
            i++;
        }
        else {
            newArr.push(arr2[j]);
            j++
        }
    }
    while (i < arr1.length) {
        newArr.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        newArr.push(arr2[j]);
        j++
    }
    return newArr;
}