const positiveNumber = (num) => {
  if (num <= 0 && num != Number) {
    return console.log("needs to be a positive number");
  } else if (num % 3 === 0) {
    return console.log("fizz");
  } else if (num % 5 === 0) {
    return console.log("buzz");
  } else if (num % 5 === 0 && num % 3 === 0) {
    return console.log("fizz buzz");
  } else {
    return console.log(num);
  }
};

positiveNumber(4251);
