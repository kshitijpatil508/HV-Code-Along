var a = 123345;

var a = Number(prompt("Enter the number"));

const sod = function sumofdigits(a) {
  if (a == 0) return 0;
  else return Math.floor(a % 10) + sumofdigits(a / 10);
};

console.log(sod(a));
