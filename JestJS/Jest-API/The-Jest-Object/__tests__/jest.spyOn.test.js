// jest.spyOn(object, methodName)

// Creates a mock function similar to jest.fn but also tracks calls to 
// object[methodName]. Returns a Jest mock function.

// NOTE
// By default, jest.spyOn also calls the spied method. This is different behavior from 
// most other test libraries. If you want to overwrite the original function, you can use 
// jest.spyOn(object, methodName).mockImplementation(() => customImplementation) or 
// object[methodName] = jest.fn(() => customImplementation).

// TIP
// Since jest.spyOn is a mock, you could restore the initial state by calling 
// jest.restoreAllMocks in the body of the callback passed to the afterEach hook.

const video = require('../video');

afterEach(() => {
  // restore the spy created with spyOn
  jest.restoreAllMocks();
});

test('plays video', () => {
  const spy = jest.spyOn(video, 'play');
  const isPlaying = video.play();

  expect(spy).toHaveBeenCalled();
  expect(isPlaying).toBe(true);
});

// PASS  __tests__/jest.spyOn.test.js
// √ plays video (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total