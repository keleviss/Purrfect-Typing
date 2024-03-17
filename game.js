

let timer;
let timeLeft = 30;

function startGame() {
  timer = setInterval(function () {
    timeLeft--;
    document.querySelector('.curr_time').textContent = timeLeft + 's';
    if (timeLeft <= 0) {
      clearInterval(timer);
      alert('Time\'s up!');
    }
  }, 1000);
}

function processCurrentText() {
  // Implement logic to process the user's input

}

function resetValues() {
  clearInterval(timer);
  timeLeft = 30;
  document.querySelector('.curr_time').textContent = '30s';
  document.querySelector('.input_area').value = '';
}

