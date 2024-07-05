// expect.not.stringMatching(string | regexp)

// expect.not.stringMatching(string | regexp) matches the received value if it is 
// not a string or if it is a string that does not match the expected string or 
// regular expression.

// It is the inverse of expect.stringMatching.

describe('not.stringMatching', () => {
  const expected = /Hello world!/;

  it('matches if the received value does not match the expected regex', () => {
    expect('How are you?').toEqual(expect.not.stringMatching(expected));
  });
});

// PASS  ./expect.not.stringMatching.test.js
// not.stringMatching
//   √ matches if the received value does not match the expected regex (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total