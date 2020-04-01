const Adagrams = {
  drawLetters() {
    const constLetterPool = ['A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'D', 'D', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'E', 'F', 'F', 'G', 'G', 'G', 'H', 'H', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'I', 'J', 'K', 'L', 'L', 'L', 'L', 'M', 'M', 'N', 'N', 'N', 'N', 'N', 'N', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'O', 'P', 'P', 'Q', 'R', 'R', 'R', 'R', 'R', 'R', 'S', 'S', 'S', 'S', 'T', 'T', 'T', 'T', 'T', 'T', 'U', 'U', 'U', 'U', 'V', 'V', 'W', 'W', 'X', 'Y', 'Y', 'Z'];
    let playerHand = [];

    for (let i = 0; i < 10; i++) {
      const randomNum = Math.floor(Math.random() * 99);
      playerHand.push(constLetterPool[randomNum]);
    };

    return playerHand;
  },
  usesAvailableLetters(input, lettersInHand) {
    const inputArray = input.toUpperCase().split('');
    let checkAvail = {};

    for (const letter of lettersInHand) {
      if (checkAvail[letter] === undefined) {
        checkAvail[letter] = 1;
      } else {
        checkAvail[letter] += 1;
      }
    };

    for (const letter of inputArray) {
      if (checkAvail[letter] !== undefined) {
        checkAvail[letter] -= 1;
      } else {
        checkAvail[letter] = -1;
      }
    };

    for (const count of Object.values(checkAvail)) {
      if (count < 0) return false;
    };

    return true;
  },
  scoreWord (word) {
    const wordarray = word.toUpperCase().split('');
    let total = 0;

    const scoringTable = {
      1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
      2: ['D', 'G'],
      3: ['B', 'C', 'M', 'P'],
      4: ['F', 'H', 'V', 'W', 'Y'],
      5: ['K'],
      8: ['J', 'X'],
      10: ['Q', 'Z']
    };

    for (const letter of wordArray) {
      for (const scoreLetter of Object.keys(scoringTable)) {
        if (scoringTable[scoreLetter].includes(letter)) {
          total += scoreLetter;
        };
      };
    };

    return total;
  }
};

// Do not remove this line or your tests will break!
export default Adagrams;