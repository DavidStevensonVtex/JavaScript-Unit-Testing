// .toHaveReturnedTimes(number) matcher

// Also under the alias: .toReturnTimes(number)

// Use .toHaveReturnedTimes to ensure that a mock function returned successfully 
// (i.e., did not throw an error) an exact number of times. Any calls to the mock 
// function that throw an error are not counted toward the number of times the 
// function returned.

// For example, let's say you have a mock drink that returns true. You can write:

test('drink returns twice', () => {
  const drink = jest.fn(() => true);

  drink();
  drink();

  expect(drink).toHaveReturnedTimes(2);
});

// PASS  ./expect.toHaveReturnedTimes.test.js
// √ drink returns twice (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total