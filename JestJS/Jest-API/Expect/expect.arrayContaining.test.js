// expect.arrayContaining(array)

// expect.arrayContaining(array) matches a received array which contains all of the elements 
// in the expected array. That is, the expected array is a subset of the received array. 
// Therefore, it matches a received array which contains elements that are not in the 
// expected array.

// You can use it instead of a literal value:

// • in toEqual or toHaveBeenCalledWith
// • to match a property in objectContaining or toMatchObject

describe('arrayContaining', () => {
  const expected = ['Alice', 'Bob'];
  it('matches even if received contains additional elements', () => {
    expect(['Alice', 'Bob', 'Eve']).toEqual(expect.arrayContaining(expected));
  });
  it('does not match if received does not contain expected elements', () => {
    expect(['Bob', 'Eve']).not.toEqual(expect.arrayContaining(expected));
  });
});

describe('Beware of a misunderstanding! A sequence of dice rolls', () => {
  const expected = [1, 2, 3, 4, 5, 6];
  it('matches even with an unexpected number 7', () => {
    expect([4, 1, 6, 7, 3, 5, 2, 5, 4, 6]).toEqual(
      expect.arrayContaining(expected),
    );
  });
  it('does not match without an expected number 2', () => {
    expect([4, 1, 6, 7, 3, 5, 7, 5, 4, 6]).not.toEqual(
      expect.arrayContaining(expected),
    );
  });
});

// PASS  ./expect.arrayContaining.test.js
// arrayContaining
//   √ matches even if received contains additional elements (2 ms)
//   √ does not match if received does not contain expected elements
// Beware of a misunderstanding! A sequence of dice rolls
//   √ matches even with an unexpected number 7
//   √ does not match without an expected number 2

// Test Suites: 1 passed, 1 total
// Tests:       4 passed, 4 total