// Binary search

function binarySearch(arr, num) {
  var start = 0,
    end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    let middleValue = arr[mid];

    if (num === middleValue) {
      return true;
    } else if (num < middleValue) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return false;
}

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
num = 18;

console.log("Binary Search", binarySearch(arr, num));

// console.log("Linear Search", linearSearch(arr, num));
