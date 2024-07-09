// jest.replaceProperty(object, propertyKey, value)

// Replace object[propertyKey] with a value. The property must already exist on the object. 
// The same property might be replaced multiple times. Returns a Jest replaced property.

// NOTE
// To mock properties that are defined as getters or setters, use jest.spyOn(object, methodName, accessType) 
// instead. To mock functions, use jest.spyOn(object, methodName) instead.

// TIP
// All properties replaced with jest.replaceProperty could be restored to the original value by 
// calling jest.restoreAllMocks on afterEach method.

const utils = require('../utils');

afterEach(() => {
  // restore replaced property
  jest.restoreAllMocks();
});

test('isLocalhost returns true when HOSTNAME is localhost', () => {
  jest.replaceProperty(process, 'env', {HOSTNAME: 'localhost'});
  expect(utils.isLocalhost()).toBe(true);
});

test('isLocalhost returns false when HOSTNAME is not localhost', () => {
  jest.replaceProperty(process, 'env', {HOSTNAME: 'not-localhost'});
  expect(utils.isLocalhost()).toBe(false);
});

// PASS  __tests__/jest.replaceProperty.test.js
// √ isLocalhost returns true when HOSTNAME is localhost (2 ms)
// √ isLocalhost returns false when HOSTNAME is not localhost

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total