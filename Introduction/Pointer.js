// Practice:
// Write a function that given a sorted array of integers and a number. Find if there's any pair in the array that has average of the given number. Find all of them. There might be multiple pairs fit the condition.
// Ex: averagePair([-11, 0, 1, 2, 3, 9, 14, 17, 21], 1.5)
// The number pair is -11 and 14, 0 and 3, 1 and 2

console.log(Subsequence("book", "brooklyn"));

// Use nested loop
// O(n^2)
function AveragePairNestedLoop(arr, avg) {
    let result = [];
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] == avg * 2) {
                result.push(`${arr[i]} and ${arr[j]}`);
            }
        }
    }
    return result;
}

// Use Pointer. 只能用在 sorted array。從 array 的兩邊往內找。
// O(n)
function AveragePairPointer(arr, avg) {
    let result = [];
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let tempAvg = (arr[left] + arr[right]) / 2;
        if (tempAvg > avg) {
            right--;
        }
        else if (tempAvg < avg) {
            left++;
        }
        else if (tempAvg == avg) {
            result.push(`${arr[left]} and ${arr[right]}`);
            right--;
            left++;
        }

    }
    return result;
}

// Practice:
// Palindrome
// Write a function that checks if the input string is a palindrome. Palindrome is a word that can be read forwards and backwards.
// Ex:
// "awesome" => false
// "foobar" => false
// "tacocat" => true
function Palindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left <= right) {
        if (str[left] != str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}


// Practice:
// A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. Write a function that checks if one string is a subsequence of the other string.
// Ex:
// "hello", "hello dear" => true;
// "book", "brooklyn" => true;
// "abc", "bac" => false; (order matters)

function Subsequence(str1, str2) {
    if (str1.length == 0) return true;
    let str1Pointer = 0;
    let str2Pointer = 0;
    while (str2Pointer < str2.length) {
        if (str1[str1Pointer] == str2[str2Pointer]){
            str1Pointer++;
        }
        str2Pointer++;
        if (str1Pointer >= str1.length) return true;
    }
    return false;
}