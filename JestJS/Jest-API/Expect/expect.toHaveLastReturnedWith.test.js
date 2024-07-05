// .toHaveLastReturnedWith(value)

// Also under the alias: .lastReturnedWith(value)

// Use .toHaveLastReturnedWith to test the specific value that a mock function last returned. 
// If the last call to the mock function threw an error, then this matcher will fail no matter 
// what value you provided as the expected return value.

// For example, let's say you have a mock drink that returns the name of the beverage that was 
// consumed. You can write:

test('drink returns La Croix (Orange) last', () => {
  const beverage1 = {name: 'La Croix (Lemon)'};
  const beverage2 = {name: 'La Croix (Orange)'};
  const drink = jest.fn(beverage => beverage.name);

  drink(beverage1);
  drink(beverage2);

  expect(drink).toHaveLastReturnedWith('La Croix (Orange)');
});

// PASS  ./expect.toHaveLastReturnedWith.test.js
// √ drink returns La Croix (Orange) last (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total