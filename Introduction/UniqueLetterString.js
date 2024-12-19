console.log(uniqueLetterString("thisishowwedoit"));

// Practice:
// Write a function called uniqueLetterString, which accepts a string and returns the length of the longest substring with all distinct characters.
// Ex:
// uniqueLetterString("thisishowwedoit") => return 6

function uniqueLetterString(str) {
    let left = 0;
    let right = 0;
    let counter = {};
    let maxLength = -Infinity;
    while (right < str.length) {
        if (counter[str[right]]) {
            delete counter[str[left]];
            left++;
        }
        else {
            if (right - left + 1 > maxLength) {
                maxLength = right - left + 1;
            }
            counter[str[right]] = 1;
            right++;
        }
    }
    if (maxLength == -Infinity) {
        return null;
    }
    else {
        return maxLength;
    }
}