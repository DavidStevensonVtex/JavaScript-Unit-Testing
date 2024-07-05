// toBeUndefined()
// Use .toBeUndefined to check that a variable is undefined. For example, if you want 
// to check that a function bestDrinkForFlavor(flavor) returns undefined for the 'octopus' 
// flavor, because there is no good octopus-flavored drink:

function bestDrinkForFlavor(flavor) { return undefined ; }

test('the best drink for octopus flavor is undefined', () => {
  expect(bestDrinkForFlavor('octopus')).toBeUndefined();
});

// You could write expect(bestDrinkForFlavor('octopus')).toBe(undefined), but it's better 
// practice to avoid referring to undefined directly in your code.

// PASS  ./expect.toBeUndefined.test.js
// √ the best drink for octopus flavor is undefined (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total