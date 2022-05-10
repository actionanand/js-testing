import { it, vi, expect } from 'vitest';

import { HttpError } from './errors';
import { sendDataRequest } from './http';

const testResponseData = {
  'testKey': 'http test response'
};

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {

    if (typeof options.body !== 'string') {
      return reject('Not a string');
    }

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

const testInputData = {
  key : 'test input data'
};

vi.stubGlobal('fetch', testFetch);

it('should return http response data.', () => {

  return expect(sendDataRequest(testInputData)).resolves.toEqual(testResponseData);
});

it('should convert provided data into JSON before sending request.', async () => {
  let errorMessage = '';

  // return expect(sendDataRequest(testInputData)).not.rejects.toBe('Not a string');

  try {
    await sendDataRequest(testInputData);
  } catch (error) {
    errorMessage = error;
  }

  expect(errorMessage).not.toBe('Not a string');
});

it('should throw an HTTP error, if non-ok response received.', () => {

  testFetch.mockImplementationOnce((url, options) => {
    return new Promise((resolve, reject) => {
  
      const testResp = {
        ok: false,
        json() {
          return new Promise((resolve, reject) => {
            resolve(testResponseData);
          })
        }
      };
      
      resolve(testResp);
    });
  });

  return expect(sendDataRequest(testInputData)).rejects.toBeInstanceOf(HttpError);
});