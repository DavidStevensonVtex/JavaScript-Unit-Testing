// .toBeFalsy() matcher

// Use .toBeFalsy when you don't care what a value is and you want to ensure a value is 
// false in a boolean context. For example, let's say you have some application code 
// that looks like:

// drinkSomeLaCroix();
// if (!getErrors()) {
//   drinkMoreLaCroix();
// }

// You may not care what getErrors returns, specifically - it might return false, null, or 0, 
// and your code would still work. So if you want to test there are no errors after drinking 
// some La Croix, you could write:

function drinkSomeLaCroix() {}
function getErrors() { return null ; }

test('drinking La Croix does not lead to errors', () => {
  drinkSomeLaCroix();
  expect(getErrors()).toBeFalsy();
});

// In JavaScript, there are six falsy values: false, 0, '', null, undefined, and NaN. 
// Everything else is truthy.

// PASS  ./expect.toBeFalsy.test.js
// √ drinking La Croix does not lead to errors (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total