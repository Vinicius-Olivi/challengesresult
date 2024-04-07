let aNumber = Math.floor(Math.random() * 10);
let multiple = Math.floor(Math.random());

for (let i = 1; i <= 10; i++) {
  const result = aNumber * i;
  multiple++;
  console.log(`${aNumber} * ${multiple} = ${result}`);
}
