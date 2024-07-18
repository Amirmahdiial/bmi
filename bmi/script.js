document.getElementById('bmiForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var height = parseFloat(document.getElementById('heightInput').value);
  var weight = parseFloat(document.getElementById('weightInput').value);

  var bmi = calculateBMI(height, weight);

  var bmiResult = document.getElementById('bmiResult');
  bmiResult.textContent = `Your bmi is: ${bmi.toFixed(1)}`;
});

function calculateBMI(height, weight) {

  var heightInMeters = height / 100;

  var bmi = weight / (heightInMeters * heightInMeters);
  return bmi;
}