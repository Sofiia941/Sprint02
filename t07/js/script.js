const numbers = [12, 7, 3, 18, 5, 10, 9, 4, 1, 6];
numbers.sort((a, b) => {
  if (a % 2 === 0 && b % 2 !== 0) return -1;
  if (a % 2 !== 0 && b % 2 === 0) return 1;
  return a - b;
});
console.log(numbers.join(", "));