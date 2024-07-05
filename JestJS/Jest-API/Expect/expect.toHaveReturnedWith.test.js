// .toHaveReturnedWith(value) matcher

// Also under the alias: .toReturnWith(value)

// Use .toHaveReturnedWith to ensure that a mock function returned a specific value.

// For example, let's say you have a mock drink that returns the name of the beverage 
// that was consumed. You can write:

test('drink returns La Croix', () => {
  const beverage = {name: 'La Croix'};
  const drink = jest.fn(beverage => beverage.name);

  drink(beverage);

  expect(drink).toHaveReturnedWith('La Croix');
});

// PASS  ./expect.toHaveReturnedWith.test.js
// √ drink returns La Croix (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total