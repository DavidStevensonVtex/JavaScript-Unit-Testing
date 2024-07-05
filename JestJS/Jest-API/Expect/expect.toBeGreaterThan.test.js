// .toBeGreaterThan(number | bigint) matcher

// Use toBeGreaterThan to compare received > expected for number or big integer values. 
// For example, test that ouncesPerCan() returns a value of more than 10 ounces:

function ouncesPerCan() { return 99 ; }

test('ounces per can is more than 10', () => {
  expect(ouncesPerCan()).toBeGreaterThan(10);
});

// PASS  ./expect.toBeGreaterThan.test.js
// √ ounces per can is more than 10 (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total