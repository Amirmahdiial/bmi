document.getElementById('welcomeForm').addEventListener('submit', function(event) {
  event.preventDefault();

  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;

  var welcomeMessage = document.getElementById('welcomeMessage');
  welcomeMessage.textContent = `${firstName} ${lastName} !خوش آمدید`;
});