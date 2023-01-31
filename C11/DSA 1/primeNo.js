function isPrime(num) {
  for (i = 2; i < num % 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
}

function primeNo(num) {
  for (i = 2; i < num; i++) {
    console.log(i, " ", isPrime(i));
  }
}

primeNo(100);
