document.addEventListener('DOMContentLoaded', () => {

  let countdown; // Variable to store the countdown interval
  let startTime; // Variable to store the start time
  let timerRunning = false; // Variable to track if the timer is running

  // Function to start the countdown timer
  function startCountdown(durationInSeconds) {
    // Clear any existing countdown interval
    clearInterval(countdown);

    // Set the target time (from the start time and duration)
    // var targetTime = startTime  (durationInSeconds * 1000); // Convert seconds to milliseconds

    // Update the countdown every second
    countdown = setInterval(function () {
      // Get the current time
      // var now = new Date().getTime();

      // Calculate the time remaining
      // var distance = targetTime - now;

      // Calculate seconds remaining
      // var seconds = ((distance % (1000 * 60)) / 1000);

      durationInSeconds--;

      // Display the countdown
      console.log("Time remaining: " + durationInSeconds + "s");
      document.getElementById('timer').innerText = `${durationInSeconds}s`;

      // If the countdown is over, stop the timer
      if (durationInSeconds <= 0) {
        clearInterval(countdown);
        console.log("Countdown finished!");
      }
    }, 1000); // Update every second
  }

  // Function to handle keydown event
  function handleKeyDown(duration) {
    // Start the timer if it's not already running
    if (!timerRunning) {
      // startTime = new Date().getTime(); // Record the start time
      startCountdown(duration); // Start the countdown timer with specified duration
      timerRunning = true; // Update the timer state
    }
  }

  // Pre-defined list of the 100 most common English words
  const commonWords = [
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

  // Function to get random words
  function getRandomWords(array, numWords) {
    const shuffled = array.sort(() => 0.5 - Math.random()); // Shuffle the array
    return shuffled.slice(0, numWords); // Get the first 'numWords' elements
  }

  const randomWords = getRandomWords(commonWords, 20);

  let wordsContent = '';

  // For loop to paste each random word in a String separated by Spaces
  for (let i = 0; i < randomWords.length; i++) {
    if (i != randomWords.length - 1) {
      wordsContent += `${randomWords[i]} `;
    } else {
      wordsContent += `${randomWords[i]}`;
    }
  }
  console.log(wordsContent);

  // Apply the string with Spaces to the paragraph element
  const wordsItem = document.getElementById('words');
  wordsItem.textContent = wordsContent;

  // Get the textarea element from the DOM
  const typingTest = document.getElementById('typing-text');
  let typedText = '';
  let typedWords = [];
  let typedKeys = [];
  let keysCount = 0;
  let wordsCount = 0;

  typingTest.addEventListener('keydown', (event) => {

    handleKeyDown(30);

    // console.log('A key was pressed in the textarea.');
    let keyDown = event.key
    console.log(keyDown);

    const isKey = keyDown.length === 1;

    // Check if the key that was pressed is a printable character (e.g., 'a', 'b', '1', '*', etc.)
    if (isKey) {

      // Add the key to the typedText and to the typedKeys array
      typedText += keyDown;
      typedKeys[keysCount] = keyDown;
      keysCount++;
      console.log(typedKeys);

      // If the key is the Space character, save the typedText in the typedWords array and empty the typedText string
      if (keyDown == ' ') {
        // event.preventDefault();

        if (typedText == ' ') {
          typedText = '';
          keysCount--;
          typedKeys.pop();
        } else {
          typedWords[wordsCount] = typedText.slice(0, -1);
          wordsCount++;
          typedText = '';
          console.log(typedWords);

          typingTest.value = '';
        }
      }

    } else {
      switch (keyDown) {
        case 'Backspace':
          // Check if the typedText actually has any text
          if (typedText.length > 0) {
            typedText = typedText.slice(0, -1);
            keysCount--;
            typedKeys.pop();
            console.log(typedKeys);
          }

        case 'Enter':
        // event.preventDefault();
      }
    }

  });

})
