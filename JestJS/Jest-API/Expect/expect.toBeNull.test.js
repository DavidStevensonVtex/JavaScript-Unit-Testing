// .toBeNull()

// .toBeNull() is the same as .toBe(null) but the error messages are a bit nicer. 
// So use .toBeNull() when you want to check that something is null.

function bloop() {
  return null;
}

test('bloop returns null', () => {
  expect(bloop()).toBeNull();
});

// PASS  ./expect.toBeNull.test.js
// √ bloop returns null (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total