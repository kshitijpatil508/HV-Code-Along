arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(
  arr1.map((element) => {
    if (element % 2 === 0) return element;
    else return "odd";
  })
);

console.log(
  arr1.filter((element) => {
    return element % 2 === 0;
  })
);

console.log(
  arr1.reduce((a, b) => {
    return arr1.filter((element) => {
      return element % 2 === 0;
    });
  })
);
