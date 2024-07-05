// toBeDefined() matcher

// Use .toBeDefined to check that a variable is not undefined. For example, if you want to 
// check that a function fetchNewFlavorIdea() returns something, you can write:

function fetchNewFlavorIdea() { return "new flavor" ; }

test('there is a new flavor idea', () => {
  expect(fetchNewFlavorIdea()).toBeDefined();
});

// You could write expect(fetchNewFlavorIdea()).not.toBe(undefined), but it's better practice 
// to avoid referring to undefined directly in your code.

// PASS  ./expect.toBeDefined.test.js
// √ there is a new flavor idea (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total