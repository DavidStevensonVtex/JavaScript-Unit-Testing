// expect(value)

// The expect function is used every time you want to test a value. You will rarely call expect by itself. 
// Instead, you will use expect along with a "matcher" function to assert something about a value.

// It's easier to understand this with an example. Let's say you have a method bestLaCroixFlavor() which 
// is supposed to return the string 'grapefruit'. Here's how you would test that:

function bestLaCroixFlavor() { return "grapefruit" } 

test('the best flavor is grapefruit', () => {
  expect(bestLaCroixFlavor()).toBe('grapefruit');
});

// In this case, toBe is the matcher function. There are a lot of different matcher functions, documented 
// below, to help you test different things.

// The argument to expect should be the value that your code produces, and any argument to the matcher 
// should be the correct value. If you mix them up, your tests will still work, but the error messages on failing tests will look strange.

// PASS  ./expect.test.js
// √ the best flavor is grapefruit (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total