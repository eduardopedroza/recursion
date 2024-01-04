/** product: calculate the product of an array of numbers. */

function product(nums) {
  //Base case
  if (nums.length === 0) return 1;

  //Pop the last element and multiply it with the result of the recursive call
  return nums.pop() * product(nums);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, longestRecorded = 0) {
  //Base case
  if (words.length === 0) return 0;

  let newWordLength = words.pop().length;

  let longestInRest = longest(words);

  return Math.max(newWordLength, longestInRest);
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  //Base case
  if (str.length === 0) return '';

  return str[0] + everyOther(str.slice(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 0 || str.length === 1) return true;

  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, currentIndex = 0) {
  if (currentIndex >= arr.length) return -1;

  if (arr[currentIndex] === val) return currentIndex;

  return findIndex(arr, val, currentIndex + 1);
}


/** revString: return a copy of a string, but in reverse. */

function revString(str, newStr = '') {
  if(str.length === 0) return newStr;

  newStr += str[str.length - 1];

  return revString(str.slice(0, -1), newStr);

}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj, arr = []) {
  for (let key in obj) {
    if (typeof obj[key] === 'string') {
      arr.push(obj[key]);
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
      gatherStrings(obj[key], arr);
    }
  }
  return arr;
}


/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). 
 * This algorithm should run in O(log(N)) time (where N is the number of elements in the array */

function binarySearch(arr, val, low = 0, high = arr.length - 1) {
  if (low > high) return -1;

  let mid = Math.floor((low + high) / 2);

  if (arr[mid] === val) return mid;

  if (val < arr[mid]) {
    return binarySearch(arr, val, low, mid - 1)
  } else {
    return binarySearch(arr, val, mid + 1, high);
  }
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
