// First Draft
function canConstruct(ransomNote, magazine) {
  const ransomeNoteArray = ransomNote.split("");
  const magazineArray = magazine.split("");
  const ransomNoteDictionary = {};
  const magazineDictionary = {};
  for (let letter of ransomeNoteArray) {
    if (ransomNoteDictionary[letter] === undefined) {
      ransomNoteDictionary[letter] = 0;
    }
    ransomNoteDictionary[letter] += 1;
  }

  for (let letter of magazineArray) {
    if (magazineDictionary[letter] === undefined) {
      magazineDictionary[letter] = 0;
    }
    magazineDictionary[letter] += 1;
  }

  for (let letter of Object.keys(ransomNoteDictionary)) {
    if (!Object.keys(magazineDictionary).includes(letter)) return false;
    if (ransomNoteDictionary[letter] > magazineDictionary[letter]) return false;
  }
  return true;
}
