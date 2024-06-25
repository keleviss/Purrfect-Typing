let timer;
let testStarted = false;

// Function to start the timer
export function startTimer(duration) {
  if (testStarted == false) {
    testStarted = true;
    timer = setInterval(function () {
      duration--;
      document.querySelector('.curr_time').textContent = `${duration}`;
      if (duration == 0) {
        clearInterval(timer);
      }
    }, 1000);
  }
}

// Function to reset the timer
export function resetTimer(duration) {
  // clearInterval(timer);
  // testStarted = false;
  // document.querySelector('.curr_time').textContent = `${duration}`;

  location.assign('./index.html');

  // Reset (empty) the input area
  // document.querySelector('.input_area').value = '';
}