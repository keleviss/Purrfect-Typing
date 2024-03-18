// Implement logic to process the user's input
export function processText(event) {
  let keyDown = event.key;

  const isKey = keyDown.length === 1;
  if (isKey) {
    console.log(keyDown);
  }
}