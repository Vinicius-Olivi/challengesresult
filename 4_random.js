let numbers = [];

for (let i = 0; i < 6; i++) {
  let randomNumber = Math.floor(Math.random() * 50) + 1;
  numbers.push(randomNumber);
}

console.log(numbers);
