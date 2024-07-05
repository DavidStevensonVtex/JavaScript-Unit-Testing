// .toMatch(regexp | string)

// Use .toMatch to check that a string matches a regular expression.

// For example, you might not know what exactly essayOnTheBestFlavor() returns, but you know 
// it's a really long string, and the substring grapefruit should be in there somewhere. 
// You can test this with:

function essayOnTheBestFlavor() { return "A really long essay on the the merits of the grapefruit flavor." ; }

describe('an essay on the best flavor', () => {
  test('mentions grapefruit', () => {
    expect(essayOnTheBestFlavor()).toMatch(/grapefruit/);
    expect(essayOnTheBestFlavor()).toMatch(new RegExp('grapefruit'));
  });
});

// This matcher also accepts a string, which it will try to match:

describe('grapefruits are healthy', () => {
  test('grapefruits are a fruit', () => {
    expect('grapefruits').toMatch('fruit');
  });
});

// PASS  ./expect.toMatch.test.js
// an essay on the best flavor
//   √ mentions grapefruit (2 ms)
// grapefruits are healthy
//   √ grapefruits are a fruit (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total