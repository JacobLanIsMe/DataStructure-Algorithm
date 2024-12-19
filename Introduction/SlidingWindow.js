console.log(minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11));
// Practice: Sliding Window
// Write two functions that calculate the max and min sum of n consecutive numbers in an array.
// Ex:
// maxSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3) => 12
// minSum([2, 7, 3, 0, 6, 1, -5, -12, -11], 3) => -28

function maxSum(arr, size) {
    let maxSum = 0;
    let tempSum = 0;
    if (arr.length < size) return null;
    for (let i = 0; i < size; i++) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = size; i < arr.length; i++) {
        tempSum = tempSum - arr[i - size] + arr[i];
        if (tempSum > maxSum) {
            maxSum = tempSum;
        }
    }
    return maxSum;
}
