const numberOfStepst = (num: number, steps: number = 0): number => {
  return num === 0
    ? steps
    : numberOfSteps(num % 2 === 1 ? num - 1 : num / 2, steps + 1);
};
