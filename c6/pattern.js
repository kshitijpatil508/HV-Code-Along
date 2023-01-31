function pyramid(a) {
  var str = "* ";
  var space = " ";
  for (var i = 1; i <= a; i++) {
    console.log(space.repeat(a - i), str.repeat(i));
  }
}

function factorial(a) {
  if (a == 0) return 1;
  else return a * factorial(a - 1);
}

function factfor(a) {
  var fact = 1;
  for (i = a; i > 0; i--) {
    fact = fact * i;
  }
  console.log(fact);
}

pyramid(5);
const x = factorial(5);
console.log(x);

factfor(4);
