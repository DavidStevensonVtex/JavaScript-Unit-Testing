// .toHaveNthReturnedWith(nthCall, value) matcher

// Also under the alias: .nthReturnedWith(nthCall, value)

// Use .toHaveNthReturnedWith to test the specific value that a mock function returned for 
// the nth call. If the nth call to the mock function threw an error, then this matcher will 
// fail no matter what value you provided as the expected return value.

// For example, let's say you have a mock drink that returns the name of the beverage that 
// was consumed. You can write:

test('drink returns expected nth calls', () => {
  const beverage1 = {name: 'La Croix (Lemon)'};
  const beverage2 = {name: 'La Croix (Orange)'};
  const drink = jest.fn(beverage => beverage.name);

  drink(beverage1);
  drink(beverage2);

  expect(drink).toHaveNthReturnedWith(1, 'La Croix (Lemon)');
  expect(drink).toHaveNthReturnedWith(2, 'La Croix (Orange)');
});

// NOTE
// The nth argument must be positive integer starting from 1.

// PASS  ./expect.toHaveNthReturnedWith.test.js
// √ drink returns expected nth calls (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total