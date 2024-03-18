let timer;
let testStarted = false;

// Function to start the timer
export function startTimer(duration) {
  if (testStarted == false) {
    testStarted = true;
    timer = setInterval(function () {
      duration--;
      document.querySelector('.curr_time').textContent = `${duration}s`;
      if (duration == 0) {
        clearInterval(timer);
        alert('Time\'s up!');
      }
    }, 1000);
  }
}

// Function to reset the timer
export function resetTimer(duration) {
  clearInterval(timer);
  testStarted = false;
  document.querySelector('.curr_time').textContent = `${duration}s`;
  document.querySelector('.input_area').value = '';
}