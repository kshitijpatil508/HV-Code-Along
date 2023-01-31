function swap(arr, i, j) {
  temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function sorting(arr) {
  for (i = 0; i < arr.length; i++) {
    console.log(`\n\nIteration ${i + 1} : ${arr}`);

    for (j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        console.log(`Swapped:${arr[j]} and ${arr[j + 1]} `);
        swap(arr, j, j + 1);
      }
    }
  }
}

var arr = [3, 4, 1, 11, 5, 7, 9, 2, 0];

sorting(arr);
