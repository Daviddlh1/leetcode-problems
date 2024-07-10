function numberOfSteps(num) {
  let stepCounter = 0;
  let currentNumber = num;
  while (currentNumber !== 0) {
    if (currentNumber === 1) {
      stepCounter += 1;
      break;
    }
    if (currentNumber % 2 === 0) {
      currentNumber = currentNumber / 2;
      stepCounter += 1;
    } else {
      currentNumber = currentNumber - 1;
      if (currentNumber !== 0) {
        currentNumber = currentNumber / 2;
      }
      stepCounter += 2;
    }
  }
  return stepCounter;
}
