import { startTimer, resetTimer } from "./timer.js";
import { processText, createCaret, setCaretPosition } from "./key-processor.js";
import { commonWords, displayWords } from "./words.js";

document.addEventListener('DOMContentLoaded', () => {
  const duration = 10;

  let words = displayWords(commonWords, 10);
  let letters = document.querySelectorAll('.letter');
  let keyCounter = 0;
  
  let caret = createCaret(letters[keyCounter]);

  // When a key is pressed while we have focus on the <textarea> the test starts
  document.querySelector('.input_area').addEventListener('keydown', (event) => {
    startTimer(duration);

    let keyDown = event.key;

    const isKey = keyDown.length === 1;
    if (isKey) {
      setCaretPosition(caret, letters[keyCounter+1]);
      keyCounter++;
    }

  })

  // When the restart_btn is clicked we restart the Interval and reset the <textarea>
  document.getElementById('restart_btn').addEventListener('click', (event) => {
    event.preventDefault();
    resetTimer(duration);
    words = displayWords(commonWords, 10);
    letters = document.querySelectorAll('.letter');
    keyCounter = 0;
    caret = createCaret(letters[keyCounter]);
  })
})