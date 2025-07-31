const sentence = "I want to be a programmer";

let reverse = "";
for (letter of sentence) {
  reverse = letter + reverse;
}

// console.log(reverse);
const reverseInShort = sentence.split("").reverse().join("");
console.log(reverseInShort);
