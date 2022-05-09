import { expect, it } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it('should generate a jwt token.', (done) => {
  const testUserEmail = 'test@test.com';

  generateToken(testUserEmail, (err, token) => {
    try {
      // expect(token).toBe(2);
      expect(token).toBeDefined();
      done();
    } catch (err) {
      done(err);
    }
    
  });
});

it('should generate a jwt token - with promise:', () => {
  const testUserEmail = 'test@test.com';
  // you should actually return the promise assertion in your tests.
  // This guarantees that Vitest / Jest wait for the promise to be resolved.
  return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined(); 
});

it('should generate a jwt token - asyn await:', async () => {
  const testUserEmail = 'test@test.com';

  const generatedToken = await generateTokenPromise(testUserEmail);
  console.log({generatedToken});

  // You don't need to return when using async / await 
  // (since a function annotated with async returns a promise implicitly)
  expect(generatedToken).toBeDefined();
});