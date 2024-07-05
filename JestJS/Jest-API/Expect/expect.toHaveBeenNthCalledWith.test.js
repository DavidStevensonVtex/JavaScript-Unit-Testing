// .toHaveBeenNthCalledWith(nthCall, arg1, arg2, ....) matcher

// Also under the alias: .nthCalledWith(nthCall, arg1, arg2, ...)

// If you have a mock function, you can use .toHaveBeenNthCalledWith to test what 
// arguments it was nth called with. For example, let's say you have a drinkEach(drink, Array<flavor>) 
// function that applies f to a bunch of flavors, and you want to ensure that when you call it, the 
// first flavor it operates on is 'lemon' and the second one is 'octopus'. You can write:

function drinkEach(callback, flavors) {
    flavors.forEach(flavor => callback(flavor));
}

test('drinkEach drinks each drink', () => {
  const drink = jest.fn();
  drinkEach(drink, ['lemon', 'octopus']);
  expect(drink).toHaveBeenNthCalledWith(1, 'lemon');
  expect(drink).toHaveBeenNthCalledWith(2, 'octopus');
});

// NOTE
// The nth argument must be positive integer starting from 1.

// PASS  ./expect.toHaveBeenNthCalledWith.test.js
// √ drinkEach drinks each drink (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total