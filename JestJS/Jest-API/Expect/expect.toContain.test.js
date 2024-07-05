// .toContain(item)
// Use .toContain when you want to check that an item is in an array. For testing the items 
// in the array, this uses ===, a strict equality check. .toContain can also check whether 
// a string is a substring of another string.

// For example, if getAllFlavors() returns an array of flavors and you want to be sure that 
// lime is in there, you can write:

function getAllFlavors() { return [ 'lemon', 'banana', 'lime', 'strawberry' ]}

test('the flavor list contains lime', () => {
  expect(getAllFlavors()).toContain('lime');
});

// This matcher also accepts others iterables such as strings, sets, node lists and 
// HTML collections.

// PASS  ./expect.toContain.test.js
// √ the flavor list contains lime (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total