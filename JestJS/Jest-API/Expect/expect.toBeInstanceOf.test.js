// .toBeInstanceOf(Class)

// Use .toBeInstanceOf(Class) to check that an object is an instance of a class. 
// This matcher uses instanceof underneath.

class A {}

test('test for toBeInstanceOf', () => {
    expect(new A()).toBeInstanceOf(A);
    expect(() => {}).toBeInstanceOf(Function);
    expect(new A()).not.toBeInstanceOf(Function); 
});

// PASS  ./expect.toBeInstanceOf.test.js
// √ test for toBeInstanceOf (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total