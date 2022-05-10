import { it, describe, expect, beforeEach } from 'vitest';

import { extractPostData } from './posts';

const testTitle = 'test title';
const testContent = 'test content';
let testFormData;

describe('extractPostData: ', () => {

  beforeEach(() => {

    testFormData = {
      title: testTitle,
      content: testContent,
      get(identifier) {
        return this[identifier];
      }
    };
  });

  it('should extract "title" and "content" form the provided form data.', () => {

    const data = extractPostData(testFormData);

    expect(data.title).toBe(testTitle);
    expect(data.content).toBe(testContent);
  });
});