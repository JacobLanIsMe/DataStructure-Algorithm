
// Practice: Min Subarray Length
// Write a function called minSubLength which accepts two parameters, an array of positive integers and a positive integer. This function should retrun the minimal length of a continuous subarray - the sum of elements inside this subarray has to be greater than or equal to the positive integer parameter. If subarray not found, then return 0.
// Ex:
// minSubLength([9, 8, 1, 4, 9, 5, 1, 2], 11) => return 2

function minSubLength(arr, num) {
    let left = 0;
    let right = 0;
    let sum = arr[0];
    let currentLength = 1;
    let minLength = Infinity;
    if (sum >= num) return 1;
    do {
        if (sum < num) {
            right++;
            currentLength++;
            sum = sum + arr[right];
        }
        else {
            if (currentLength < minLength) {
                minLength = currentLength;
            }
            sum = sum - arr[left];
            left++;
            currentLength--;
        }
    } while (right < arr.length);

    return minLength == Infinity ? 0 : minLength;
}

function minSubLengthCourceSolution(arr, sum) {
    let minLength = Infinity;
    let left = 0;
    let right = 0;
    let currentSum = 0;
    while (right < arr.length) {
        currentSum += arr[right];
        while (currentSum >= sum) {
            if (minLength > right - left + 1) {
                minLength = right - left + 1;
            }
            currentSum -= arr[left];
            left++;
        }
        right++;
    }
    if (minLength == Infinity) {
        return 0;
    } else {
        return minLength;
    }
}