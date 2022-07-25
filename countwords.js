const words = {};
const args = process.argv;

for (let i = 0; i < args.length; i++) {
  // Making all text lowercase to avoid "The" and "the" being treated as different words
  const word = args[i].toLowerCase();

  if (i == 0 || i == 1) {
    // Ignore the first two command line arguments
    continue;
  } else if (words.hasOwnProperty(word)) {
    // If word exists, increment the value (number of occurences) in the key/value pair
    words[word] = words[word] + 1;
  } else {
    // Add word to map and set the value (number of occurences) to 1s
    words[word] = 1;
  }
}

const wordsSorted = Object.keys(words)
  .sort(function (a, b) {
    return words[a] - words[b];
  })
  .map((key) => ({ [key]: words[key] }));

console.log(wordsSorted);

for (const word of wordsSorted) {
  for (const k in word) {
    console.log(`${word[k]} ${k}`);
  }
}
