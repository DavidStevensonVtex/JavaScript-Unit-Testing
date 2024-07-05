// Modifiers

// .not

// If you know how to test something, .not lets you test its opposite. For example, 
// this code tests that the best La Croix flavor is not coconut:

function bestLaCroixFlavor() { return "grapefruit" } 

test('the best flavor is not coconut', () => {
  expect(bestLaCroixFlavor()).not.toBe('coconut');
});

// PASS  ./expect.not.test.js
// √ the best flavor is not coconut (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total