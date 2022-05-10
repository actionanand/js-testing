import { it, vi, expect } from 'vitest';

import { sendDataRequest } from './http';

const testResponseData = {
  'testKey': 'http test response'
};

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    const testResp = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        })
      }
    };
    
    resolve(testResp);
  });
});

vi.stubGlobal('fetch', testFetch);

it('should return http response data.', () => {
  const testInputData = {
    key : 'test input data'
  };

  return expect(sendDataRequest(testInputData)).resolves.toEqual(testResponseData);
});