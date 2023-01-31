var words = ["water", "movie", "monkey", "snake", "color", "computer"];

var test_arr = "color";
var str_arr = test_arr.split("");
var temp = [];

for (var i = 0; i < str_arr.length; i++) {
  if (str_arr[i] == "o") {
    temp.push(i);
  }
}

console.log(temp);

// console.log(x);
