export const shortname = (data: any) => {
  // Split the sentence into an array of words
  const words = data.split(/\s+/);

  // Initialize with a very large value to ensure any word is shorter
  let shortestWord = words[0] || ""; // Default to an empty string for an empty sentence

  // Iterate through each word and update the shortestWord if a shorter one is found
  words.forEach((word: any) => {
    if (word.length < shortestWord.length) {
      shortestWord = word;
    }
  });

  return shortestWord;
};
