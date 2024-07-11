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

function canConstructV2(ransomNote, magazine) {
  const charsAmountInMagazine = new Map();
  for (let char of magazine) {
    if (!charsAmountInMagazine.has(char)) {
      charsAmountInMagazine.set(char, 0);
    }
    const currentValue = charsAmountInMagazine.get(char);
    charsAmountInMagazine.set(char, currentValue + 1);
  }
  for (let char of ransomNote) {
    console.log(charsAmountInMagazine.get(char));
    if (
      charsAmountInMagazine.has(char) &&
      charsAmountInMagazine.get(char) !== 0
    ) {
      const currentValue = charsAmountInMagazine.get(char);
      charsAmountInMagazine.set(char, currentValue - 1);
    } else {
      return false;
    }
  }
  return true;
}
function canConstructV3(ransomNote, magazine) {
  for (let i = 0; i < ransomNote.length; i++) {
    const char = ransomNote[i];
    if (magazine.indexOf(char) === -1) {
      return false;
    }
    magazine = magazine.replace(char, "");
  }
  return true
}

console.log(canConstructV3("a", "ab"));
