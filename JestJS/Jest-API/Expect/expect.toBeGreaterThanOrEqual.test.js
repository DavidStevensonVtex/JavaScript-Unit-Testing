// .toBeGreaterThanOrEqual(number | bigint)

// Use toBeGreaterThanOrEqual to compare received >= expected for number or big integer values. 
// For example, test that ouncesPerCan() returns a value of at least 12 ounces:

function ouncesPerCan() { return 13 ; }

test('ounces per can is at least 12', () => {
  expect(ouncesPerCan()).toBeGreaterThanOrEqual(12);
});

// PASS  ./expect.toBeGreaterThanOrEqual.test.js
// √ ounces per can is at least 12 (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total