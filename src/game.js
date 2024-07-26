import { startTimer, resetTimer } from "./timer.js";
import { processText, createCaret, setCaretPosition } from "./key-processor.js";
import { commonWords, displayWords } from "./words.js";

document.addEventListener('DOMContentLoaded', () => {

  const duration = 10;
  let keyCounter = 0;

  let words = displayWords(commonWords, 20);
  let letters = document.querySelectorAll('.letter');

  window.addEventListener('load', () => {
    createCaret(letters[keyCounter]);
  })

  let wordInput = document.getElementById('words');
  wordInput.setAttribute('tabindex', '0');
  wordInput.focus();
  
  wordInput.addEventListener('keydown', (event) => {

    switch (event.key) {

      // If user pressed the 'Backspace' key
      case 'Backspace':

        console.log('Backspace pressed');
        if (keyCounter > 0) {

          // Move caret to the left (previous character)
          keyCounter--;
          setCaretPosition(letters[keyCounter]);

          // Remove any coloring from the letters or spaces
          letters[keyCounter].classList.remove('space-wrong');
          letters[keyCounter].classList.remove('letter-wrong');
          letters[keyCounter].classList.remove('letter-correct');

          // Add the neutral coloring for the letters and spaces
          letters[keyCounter].classList.add('letter-neutral');

        }
        break;
      //

      // If user pressed the 'Space' key
      case ' ':

        // When a key is pressed start the timer
        startTimer(duration);
        pauseCaretAnimation();

        console.log('Spacebar pressed');
        if (keyCounter < letters.length - 1) {

          if (event.key !== letters[keyCounter].innerHTML) {

            letters[keyCounter].classList.remove('letter-neutral');
            letters[keyCounter].classList.add('letter-wrong');

          }

          keyCounter++;
          setCaretPosition(letters[keyCounter]);
        }
        break;
      //

      // If user pressed any other key
      default:

        if (isPrintableCharacter(event.key)) { // If user pressed any alphabetical character [a-zA-Z] key

          // When a key is pressed start the timer
          startTimer(duration);
          pauseCaretAnimation();

          console.log('Character pressed:', event.key);
          if (keyCounter < letters.length - 1) {

            if (event.key === letters[keyCounter].innerHTML) {

              letters[keyCounter].classList.remove('letter-neutral');
              letters[keyCounter].classList.add('letter-correct');

            } else if (event.key !== letters[keyCounter].innerHTML) {

              if (letters[keyCounter].innerHTML === ' ') {
                letters[keyCounter].classList.remove('letter-neutral');
                letters[keyCounter].classList.add('space-wrong');
              } else {
                letters[keyCounter].classList.remove('letter-neutral');
                letters[keyCounter].classList.add('letter-wrong');
              }

            }

            // Move caret to the right (next character)
            keyCounter++;
            setCaretPosition(letters[keyCounter]);

          }
        }
      //
    }
  })

  // Event listener for when the wordInput div loses focus
  wordInput.addEventListener('blur', function () {
    console.log('Div lost focus');
  });

  // When the restart_btn is clicked we restart the Interval and reset the <textarea>
  document.getElementById('restart_btn').addEventListener('click', (event) => {
    event.preventDefault();

    // 1. Reset the timer to 10 seconds
    resetTimer(duration);

    // 2. display a new set of 10 words
    // words = displayWords(commonWords, 10);

    // 3. Create a new list of all the letters
    // letters = document.querySelectorAll('.letter');

    // 4. Set the number of keys pressed back to 0
    // keyCounter = 0;

    // 5. Create a new caret and place it at the at the first character
    // caret = createCaret(letters[keyCounter]);
  })

  // function to check if the event.key is an alphabetical character [a-zA-Z] 
  const isPrintableCharacter = (str) => {
    return str.length === 1 && str.match(/[a-zA-Z]/);
  };

  // Pause the blinking animation of the caret
  function pauseCaretAnimation() {
    const caret = document.querySelector('.caret');
    caret.classList.remove('blink');
  }
})