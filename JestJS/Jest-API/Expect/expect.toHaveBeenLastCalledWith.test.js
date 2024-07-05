// .toHaveBeenLastCalledWith(arg1, arg2, ...) matcher

// Also under the alias: .lastCalledWith(arg1, arg2, ...)

// If you have a mock function, you can use .toHaveBeenLastCalledWith to test what 
// arguments it was last called with. For example, let's say you have a applyToAllFlavors(f) 
// function that applies f to a bunch of flavors, and you want to ensure that when you call it, 
// the last flavor it operates on is 'mango'. You can write:

function applyToAllFlavors(callback) {
    callback('banana');
    callback('mango');
}

test('applying to all flavors does mango last', () => {
  const drink = jest.fn();
  applyToAllFlavors(drink);
  expect(drink).toHaveBeenLastCalledWith('mango');
});

// PASS  ./expect.toHaveBeenLastCalledWith.test.js
// √ applying to all flavors does mango last (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total