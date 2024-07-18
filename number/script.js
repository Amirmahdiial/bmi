document.getElementById('evenOddForm').addEventListener('submit', function(event) {
  event.preventDefault();


  var number = parseInt(document.getElementById('numberInput').value);

  var resultMessage = document.getElementById('resultMessage');
  if (number % 2 === 0) {
    resultMessage.textContent =`${number} is even.`;
  } else {
    resultMessage.textContent = `${number} is odd.`;
  }
});