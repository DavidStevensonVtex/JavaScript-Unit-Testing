// expect.anything()

// expect.anything() matches anything but null or undefined. You can use it inside toEqual or 
// toHaveBeenCalledWith instead of a literal value. For example, if you want to check that a 
// mock function is called with a non-null argument:

test('map calls its argument with a non-null argument', () => {
  const mock = jest.fn();
  [1].map(x => mock(x));
  expect(mock).toHaveBeenCalledWith(expect.anything());
});

// PASS  ./expect.anything.test.js
// √ map calls its argument with a non-null argument (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total