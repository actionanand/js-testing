import { vi, it, expect, beforeEach } from 'vitest';
import { Window } from 'happy-dom';
import fs from 'fs';
import path from 'path';

import { showError } from './dom';

const htlmDocPath = path.join(process.cwd(), 'index.html');
const htmlDocContent = fs.readFileSync(htlmDocPath).toString();
const window = new Window();
const document = window.document;

vi.stubGlobal('document', document); // replacing original dom document by we made document

beforeEach(() => {
  document.body.innerHTML = '';
  document.write(htmlDocContent); // creating html page in happy-dom
});

it('should add error paragraph to the id="errors" element', () => {
  showError('test');

  const errorEl = document.getElementById('errors');
  const errorPara = errorEl.firstElementChild;

  expect(errorPara).not.toBeNull();
});

it('should not contain error para initially', () => {
  const errorEl = document.getElementById('errors');
  const errorPara = errorEl.firstElementChild;

  expect(errorPara).toBeNull();
});

it('should output the provided message in the error paragraph.', () => {
  const errorMsg = 'Test Error Message.';
  showError(errorMsg);
  const errorEl = document.getElementById('errors');
  const errorPara = errorEl.firstElementChild;

  expect(errorPara.textContent).toBe(errorMsg);
});