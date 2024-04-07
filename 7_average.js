const calculateAverage = (mathScore, scienceScore, englishScore) => {
  return Math.round((mathScore + scienceScore + englishScore) / 3);
};
console.log(calculateAverage(100, 70, 90));

if (calculateAverage >= 90) {
  console.log("Grade A");
} else if (calculateAverage >= 80) {
  console.log("Grade B");
} else {
  console.log("Grade C");
}
