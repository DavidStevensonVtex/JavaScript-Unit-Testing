// .toHaveReturned() matcher

// Also under the alias: .toReturn()

// If you have a mock function, you can use .toHaveReturned to test that the mock function 
// successfully returned (i.e., did not throw an error) at least one time. For example, 
// let's say you have a mock drink that returns true. You can write:

test('drinks returns', () => {
  const drink = jest.fn(() => true);

  drink();

  expect(drink).toHaveReturned();
});

// PASS  ./expect.toHaveReturned.test.js
// √ drinks returns (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total