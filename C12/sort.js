function sorting(arr) {
  var arr2 = arr;
  var min = arr[0];
  var temp;
  for (i = 0; i < arr2.length; i++) {
    for (j = i + 1; j < arr2.length; j++) {
      if (arr2[j] < arr[i]) {
        temp = arr2[i];
        arr2[i] = arr2[j];
        arr2[j] = temp;
        console.log(`Swapped:${arr2[i]} and ${arr2[j]}`);
      }
    }

    console.log(`Pass ${i + 1} : ${arr2}`);
  }
  console.log(arr2);
}

var arr = [3, 4, 1, 5, 7, 9, 2, 11, 0];

sorting(arr);
