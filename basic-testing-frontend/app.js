import { extractEnteredNumberValues } from './src/parser.js';
import { calculateResults } from './src/math.js';
import { generateResultText, outputResult } from './src/output.js';

const form = document.querySelector('form');

function formSubmitHandler(event) {
  event.preventDefault();

  const numberValues = extractEnteredNumberValues(form);

  const result = calculateResults(numberValues);
  
  const resultText = generateResultText(result);

  outputResult(resultText);
}

form.addEventListener('submit', formSubmitHandler);