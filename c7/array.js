var arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(arr1[arr1.length - 1]);

var arr2 = new Array(4, 5, 6, 7, 8, 9);
// console.log(arr2);
// console.log(typeof arr2);

// for (var i = 0; i < arr2.length; i++) {
//   console.log(arr2[i]);
// }
// console.log("###################");
// for (var i in arr1) {
//   console.log(arr1[arr1.length - 1 - i]);
// }
// console.log("###################");
// for (var i of arr1) {
//   console.log(i);
// }// console.log(arr2);

// adding to last
arr1.push(200);
arr2.unshift(50);
console.log(arr1);
console.log(arr2);
arr1.splice(0, 1, 500);
console.log(arr1);
