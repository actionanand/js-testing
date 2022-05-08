export function generateResultText(calculationResults) {
  let resultText = '';

  if (calculationResults === 'invalid') {
    resultText = 'Invalid input. You must enter valid numbers.';
  } else if (calculationResults !== 'no-calc') {
    resultText = 'Result: ' + calculationResults;
  }

  return resultText;
}


export function outputResult(resultText) {
  const output = document.getElementById('result');
  output.textContent = resultText;
}