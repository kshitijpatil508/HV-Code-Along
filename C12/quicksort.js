function swap(arr, i, j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function quicksort(arr) {
  if (arr.length <= 1) return arr;
  var left = [];
  var right = [];
  const pivot = arr[arr.length - 1];
  for (i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else right.push(arr[i]);
  }
  return [...quicksort(left), pivot, ...quicksort(right)];
}

var arr = [3, 4, 1, 11, 5, 7, 9, 2, 0, 100, -1];

const srt = quicksort(arr);
console.log(srt);
