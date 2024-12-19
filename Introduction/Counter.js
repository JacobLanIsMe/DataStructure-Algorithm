// Use nested loop to solve Intersection problem.
// O(n^2). Really bad.
let arr1 = [1, 3, 5, 6];
let arr2 = [86, 94, 53, 5, 1];
console.log(SameFrequency("str1", "str2"));

function NestedLoop(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i]);
                continue;
            }
        }
    }
    return result;
}

// Use Counter to solve Intersection problem.
// O(n)

function Counter(arr1, arr2) {
    let result = [];
    let arr3 = arr1.concat(arr2);
    let counter = {}
    for (let i = 0; i < arr3.length; i++) {
        if (!counter[arr3[i]]) {
            counter[arr3[i]] = 1;
        }
        else {
            counter[arr3[i]]++;
        }
    }
    for (let property in counter) {
        if (counter[property] >= 2) {
            result.push(property);
        }
    }
    return result;
}

// Practice:
// Write a function that takes two strings and check if they have the same letters. Order doesn't matter.
// Ex:
// "abbc", "aabc" => false
// "aabb", "abab" => true

function SameFrequency(str1, str2) {
    if (str1.length != str2.length) return false;
    let counter1 = {};
    let counter2 = {}

    for (var i in str1) {
        if (counter1[str1[i]]) {
            counter1[str1[i]]++;
        }
        else {
            counter1[str1[i]] = 1;
        }
    }
    for (var i in str2) {
        if (counter2[str2[i]]) {
            counter2[str2[i]]++;
        }
        else {
            counter2[str2[i]] = 1;
        }
    }
    for (var property in counter1) {
        if (!counter2[property]) return false;
        if (counter1[property] != counter2[property]) return false;
    }
    return true;
}