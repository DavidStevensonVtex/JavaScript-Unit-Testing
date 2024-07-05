// expect.not.stringContaining(string)

// expect.not.stringContaining(string) matches the received value if it 
// is not a string or if it is a string that does not contain the exact 
// expected string.

// It is the inverse of expect.stringContaining.

describe('not.stringContaining', () => {
    const expected = 'Hello world!';
  
    it('matches if the received value does not contain the expected substring', () => {
      expect('How are you?').toEqual(expect.not.stringContaining(expected));
    });
  });

// PASS  ./expect.not.stringContaining.test.js
// not.stringContaining
//   √ matches if the received value does not contain the expected substring (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total