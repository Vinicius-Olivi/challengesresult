const isEven = (num1, num2) => {
  if (typeof num1 !== "number" || typeof num2 !== "number") {
    return console.log("make sure you enter 2 numbers");
  } else if ((num1 + num2) % 2 !== 0) {
    return console.log(num1 + num2);
  } else {
    return console.log(num1 * num2);
  }
};

isEven(3, 3);
