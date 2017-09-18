let totalNums = [1, 2, 3]; // should print 6 as sum
let totalNums2 = [0, 1, 2]; // should print 3 as sum

function sumFor(values) {
  let total = 0;
  for (const num of values) {
    total += num;
  }
  return total;
}

console.log(sumFor(totalNums));
console.log(sumFor(totalNums2));

function sumWhile(values) {
  let total = 0;
  let i = 0;
  while (i < values.length) {
    total += values[i];
    i++;
  }
  return total;
}

console.log(sumWhile(totalNums));
console.log(sumWhile(totalNums2));

function sumRecursion(values) {
  if (values.length === 0) {
    return 0;
  }
  return values[0] + sumRecursion(values.slice(1, values.length));
}

console.log(sumRecursion(totalNums));
console.log(sumRecursion(totalNums2));

function sumTheSimpleWay(values) {
  return _.reduce(values, function(memo, num) { return memo + num; }, 0);
}

console.log(sumTheSimpleWay(totalNums));
console.log(sumTheSimpleWay(totalNums2));
