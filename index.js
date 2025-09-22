// index.js

const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

// Helper: capitalize only the first letter, leave the rest as-is
function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// Convert one sentence to Title Case
function titleCaseSentence(sentence) {
  return sentence
    .split(" ")          // break into words
    .map(capitalize)     // fix each word
    .join(" ");          // rejoin
}

// Main function
function titleCased() {
  return tutorials.map(titleCaseSentence);
}

module.exports = {
  tutorials,
  titleCased
};

// Uncomment to test manually
// console.log(titleCased());
