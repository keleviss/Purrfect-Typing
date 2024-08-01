// Pre-defined list of the 100 most common English words
export const commonWords = [
  "the", "be", "to", "of", "and", "a", "in", "that", "have", "I",
  "it", "for", "not", "on", "with", "he", "as", "you", "do", "at",
  "this", "but", "his", "by", "from", "they", "we", "say", "her", "she",
  "or", "an", "will", "my", "one", "all", "would", "there", "their", "what",
  "so", "up", "out", "if", "about", "who", "get", "which", "go", "me",
  "when", "make", "can", "like", "time", "no", "just", "him", "know", "take",
  "people", "into", "year", "your", "good", "some", "could", "them", "see", "other",
  "than", "then", "now", "look", "only", "come", "its", "over", "think", "also",
  "back", "after", "use", "two", "how", "our", "work", "first", "well", "way",
  "even", "new", "want", "because", "any", "these", "give", "day", "most", "us"
];

function createWordElements(words) {

  const container = document.getElementById('words');
  container.innerHTML = '';

  words.forEach(word => {
    const wordElement = createLetterElements(word);
    container.appendChild(wordElement);
  });

}

// Function to split a word into letters and create elements for each
function createLetterElements(word) {
  const wordElement = document.createElement('div');
  wordElement.style.display = 'inline';
  word.split('').forEach(letter => {
    const letterElement = document.createElement('span');
    letterElement.textContent = letter;
    letterElement.classList.add('letter');
    letterElement.classList.add('letter-neutral');
    wordElement.appendChild(letterElement);
  });

  const spaceTextNode = document.createTextNode(' ');
  const spaceElement = document.createElement('span');
  spaceElement.classList.add('letter');
  spaceElement.appendChild(spaceTextNode);
  wordElement.appendChild(spaceElement);

  return wordElement;
}

// Function to get random words
export function displayWords(array, numWords) {
  const shuffled = array.sort(() => 0.5 - Math.random()); // Shuffle the array
  const minimized = shuffled.slice(0, numWords); // Get the first 'numWords' elements

  createWordElements(minimized);

  return minimized;
}