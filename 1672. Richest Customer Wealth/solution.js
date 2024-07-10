function maximumWealth(accounts) {
  let currentRichestCustomer = 0;
  for (let client = 0; client < accounts.length; client++) {
    const totalAmount = accounts[client].reduce(
      (counter, currentBank) => counter + currentBank,
      0
    );
    if (currentRichestCustomer < totalAmount) {
      currentRichestCustomer = totalAmount;
    }
  }
  return currentRichestCustomer;
}
