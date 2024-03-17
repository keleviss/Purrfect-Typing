import { startTimer, resetTimer } from "./timer.js";
import { processText } from "./key-processor.js";
import { commonWords, getRandomWords } from "./words.js";
 
document.addEventListener('DOMContentLoaded', () => {
  const duration = 10;

  getRandomWords(commonWords, 10);

  // When a key is pressed while we have focus on the <textarea> the test starts
  document.querySelector('.input_area').addEventListener('keydown', (event) => {
    startTimer(duration);
    processText(event);
  })

  // When the restart_btn is clicked we restart the Interval and reset the <textarea>
  document.getElementById('restart_btn').addEventListener('click', (event) => {
    event.preventDefault();
    resetTimer(duration);
  })
})