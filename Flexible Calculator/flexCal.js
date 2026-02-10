//Accepts an operator string ('+', '-', '*', '/') as its first parameter.
//Uses rest to accept any number of numeric arguments.
//Uses defaults to assume 0 for missing numbers (if fewer than two are provided).
//Returns the cumulative result.

function flexCalc(op, ...nums) {

  // If only one number, add default 0
  if (nums.length === 1) {
    nums.push(0);
  }

  // If no numbers at all
  if (nums.length === 0) {
    nums = [0, 0];
  }

  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {

    switch (op) {
      case '+':
        result += nums[i];
        break;

      case '-':
        result -= nums[i];
        break;

      case '*':
        result *= nums[i];
        break;

      case '/':
        if (nums[i] === 0) {
          return "Cannot divide by zero";
        }
        result /= nums[i];
        break;

      default:
        return "Invalid operator";
    }
  }

  return result;
}



console.log(flexCalc('+', 1, 2, 3, 4)); // 10
console.log(flexCalc('*', 2, 3, 4));    // 24
console.log(flexCalc('-', 10));         // 10
console.log(flexCalc('/', 20));         // Cannot divide by zero
