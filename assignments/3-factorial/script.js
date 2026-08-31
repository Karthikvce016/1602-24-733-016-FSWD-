function factorial(number) {
  let result = 1n;
  for (let value = 2n; value <= number; value += 1n) result *= value;
  return result;
}

document.querySelector("#runButton").addEventListener("click", () => {
  const input = window.prompt("Enter a positive integer to calculate its factorial:");
  if (input === null) return;

  const trimmedInput = input.trim();
  if (!/^\d+$/.test(trimmedInput) || BigInt(trimmedInput) < 1n) {
    window.alert("Please enter a positive integer, such as 5.");
    return;
  }

  const number = BigInt(trimmedInput);
  const result = factorial(number).toString();
  document.querySelector("#resultValue").textContent = `${trimmedInput}! = ${result}`;
  window.alert(`The factorial of ${trimmedInput} is ${result}`);
});
