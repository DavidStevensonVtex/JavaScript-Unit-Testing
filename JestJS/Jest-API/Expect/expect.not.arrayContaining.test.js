// expect.not.arrayContaining(array)

// expect.not.arrayContaining(array) matches a received array which does not contain 
// all of the elements in the expected array. That is, the expected array is not a 
// subset of the received array.

// It is the inverse of expect.arrayContaining.

describe('not.arrayContaining', () => {
  const expected = ['Samantha'];

  it('matches if the actual array does not contain the expected elements', () => {
    expect(['Alice', 'Bob', 'Eve']).toEqual(
      expect.not.arrayContaining(expected),
    );
  });
});

// PASS  ./expect.not.arrayContaining.test.js
// not.arrayContaining
//   √ matches if the actual array does not contain the expected elements (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total