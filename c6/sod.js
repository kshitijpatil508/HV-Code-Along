var a = 12345;
var a = prompt();
var result = 0;
var x = 0;
while (a > 0) {
  x = Math.floor(a % 10);
  result = result + x;
  a = a / 10;
}

console.log(result);
