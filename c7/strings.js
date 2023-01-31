var str1 = "herovired vired";
console.log(str1.replace("vired", "X"));
var str3 = "2468";
console.log(str3.replace("2468", "1234"));

var arr1 = [1, 2, 3, 4, 5];

console.log(arr1.includes(1, 0));

var ans = arr1.map(function (i) {
  return i > 3;
});

console.log(ans);

// Sorting\
var arr2 = [40, 20, 100, 22, 11, 9];

console.log(
  arr2.sort(function (a, b) {
    return a - b;
  })
);
console.log(arr2);
console.log(arr2.reverse());
