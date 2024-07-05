// .toBeTruthy()
// Use .toBeTruthy when you don't care what a value is and you want to ensure a value is true in a 
// boolean context. For example, let's say you have some application code that looks like:

function drinkSomeLaCroix() {}
function  thirstInfo() { return { thirstIndex: 100 } } ;
function drinkMoreLaCroix() {}

drinkSomeLaCroix();
if (thirstInfo()) {
  drinkMoreLaCroix();
}

// You may not care what thirstInfo returns, specifically - it might return true or a complex object, 
// and your code would still work. So if you want to test that thirstInfo will be truthy after drinking some La Croix, you could write:

test('drinking La Croix leads to having thirst info', () => {
  drinkSomeLaCroix();
  expect(thirstInfo()).toBeTruthy();
});

// In JavaScript, there are six falsy values: false, 0, '', null, undefined, and NaN. 
// Everything else is truthy.

// PASS  ./expect.toBeTruthy.test.js
// √ drinking La Croix leads to having thirst info (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total