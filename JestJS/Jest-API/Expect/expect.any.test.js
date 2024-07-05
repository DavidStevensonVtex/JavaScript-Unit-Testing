// expect.any(constructor)

// expect.any(constructor) matches anything that was created with the given constructor or if 
// it's a primitive that is of the passed type. You can use it inside toEqual or toHaveBeenCalledWith 
// instead of a literal value. For example, if you want to check that a mock function is called 
// with a number:

class Cat {}
function getCat(fn) {
  return fn(new Cat());
}

test('randocall calls its callback with a class instance', () => {
  const mock = jest.fn();
  getCat(mock);
  expect(mock).toHaveBeenCalledWith(expect.any(Cat));
});

function randocall(fn) {
  return fn(Math.floor(Math.random() * 6 + 1));
}

test('randocall calls its callback with a number', () => {
  const mock = jest.fn();
  randocall(mock);
  expect(mock).toHaveBeenCalledWith(expect.any(Number));
});

// PASS  ./expect.any.test.js
// √ randocall calls its callback with a class instance (2 ms)
// √ randocall calls its callback with a number (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total