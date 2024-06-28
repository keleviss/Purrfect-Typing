// Implement logic to process the user's input
export function processText(event) {
  let keyDown = event.key;

  const isKey = keyDown.length === 1;
  if (isKey) {
    console.log(keyDown);
  }
}

export function setCaretPosition(currentLetter) {
  let caret = document.querySelector('.caret');
  const position = currentLetter.getBoundingClientRect();
  caret.style.left = `${position.left - 2}px`;
  caret.style.top = `${position.top}px`;

} 

export function createCaret(currentLetter) {

  const caret = document.createElement('div');
  caret.classList.add('caret');
  caret.classList.add('blink');

  document.getElementById('words').appendChild(caret);

  setCaretPosition(currentLetter);

  return caret;

}