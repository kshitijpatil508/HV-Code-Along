var arr1 = [2, 5, 1, 88, 11, 23, 0, -98];

var max = arr1[0],
  min = arr1[0];

console.log(
  arr1.map((a) => {
    return a * a;
  })
);

for (i of arr1) {
  if (i > max) max = i;
  if (i < min) min = i;
}
console.log("max = ", max);
console.log("min = ", min);
