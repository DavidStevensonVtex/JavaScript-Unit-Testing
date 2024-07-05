// .toBeLessThanOrEqual(number | bigint)

// Use toBeLessThanOrEqual to compare received <= expected for number or big integer values. 
// For example, test that ouncesPerCan() returns a value of at most 12 ounces:

function ouncesPerCan() { return 12 ; }

test('ounces per can is at most 12', () => {
  expect(ouncesPerCan()).toBeLessThanOrEqual(12);
});

// PASS  ./expect.toBeLessThanOrEqual.test.js
// √ ounces per can is at most 12 (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total