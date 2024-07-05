// .toThrow(error?)

// Also under the alias: .toThrowError(error?)

// Use .toThrow to test that a function throws when it is called. For example, if we want to test 
// that drinkFlavor('octopus') throws, because octopus flavor is too disgusting to drink, we 
// could write:

test('throws on octopus', () => {
  expect(() => {
    drinkFlavor('octopus');
  }).toThrow();
});

// TIP
// You must wrap the code in a function, otherwise the error will not be caught and the assertion will fail.

// You can provide an optional argument to test that a specific error is thrown:

// • regular expression: error message matches the pattern
// • string: error message includes the substring
// • error object: error message is equal to the message property of the object
// • error class: error object is instance of class
// • For example, let's say that drinkFlavor is coded like this:

class DisgustingFlavorError
{
    constructor(message) {
        this.message = message ;
    }
}

function drinkFlavor(flavor) {
  if (flavor == 'octopus') {
    throw new DisgustingFlavorError('yuck, octopus flavor');
  }
  // Do some other stuff
}

// We could test this error gets thrown in several ways:

test('throws on octopus', () => {
  function drinkOctopus() {
    drinkFlavor('octopus');
  }

  // Test that the error message says "yuck" somewhere: these are equivalent
  expect(drinkOctopus).toThrow(/yuck/);
  expect(drinkOctopus).toThrow('yuck');

  // Test the exact error message
  expect(drinkOctopus).toThrow(/^yuck, octopus flavor$/);
  expect(drinkOctopus).toThrow(new Error('yuck, octopus flavor'));

  // Test that we get a DisgustingFlavorError
  expect(drinkOctopus).toThrow(DisgustingFlavorError);
});

// PASS  ./expect.toThrow.test.js
// √ throws on octopus (1 ms)
// √ throws on octopus (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total