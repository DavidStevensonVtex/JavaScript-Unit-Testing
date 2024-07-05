// .toBeLessThan(number | bigint)

// Use toBeLessThan to compare received < expected for number or big integer values. 
// For example, test that ouncesPerCan() returns a value of less than 20 ounces:

function ouncesPerCan() { return 5 ; }

test('ounces per can is less than 20', () => {
  expect(ouncesPerCan()).toBeLessThan(20);
});

// PASS  ./expect.toBeLessThan.test.js
// √ ounces per can is less than 20 (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total