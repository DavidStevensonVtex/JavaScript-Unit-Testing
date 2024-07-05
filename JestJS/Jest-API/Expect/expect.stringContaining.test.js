// expect.stringContaining(string)

// expect.stringContaining(string) matches the received value if it 
// is a string that contains the exact expected string.

describe('stringContaining', () => {
    const expected = 'Hello world!';
  
    it('matches if the received value does not contain the expected substring', () => {
      expect('Hello world! How are you?').toEqual(expect.stringContaining('worl'));
    });
  });

//   PASS  ./expect.stringContaining.test.js
//   stringContaining
//     √ matches if the received value does not contain the expected substring (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total