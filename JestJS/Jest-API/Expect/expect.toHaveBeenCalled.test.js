// .toHaveBeenCalled() Matcher

// Also under the alias: .toBeCalled()

// Use .toHaveBeenCalled to ensure that a mock function was called.

// For example, let's say you have a drinkAll(drink, flavour) function that takes a drink function 
// and applies it to all available beverages. You might want to check that drink gets called. 
// You can do that with this test suite:

function drinkAll(callback, flavour) {
  if (flavour !== 'octopus') {
    callback(flavour);
  }
}

describe('drinkAll', () => {
  test('drinks something lemon-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'lemon');
    expect(drink).toHaveBeenCalled();
  });

  test('does not drink something octopus-flavoured', () => {
    const drink = jest.fn();
    drinkAll(drink, 'octopus');
    expect(drink).not.toHaveBeenCalled();
  });
});

// PASS  ./expect.toHaveBeenCalled.test.js
// drinkAll
//   √ drinks something lemon-flavoured (2 ms)
//   √ does not drink something octopus-flavoured (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total