// jest.isolateModules(fn)

// jest.isolateModules(fn) goes a step further than jest.resetModules() and creates a sandbox 
// registry for the modules that are loaded inside the callback function. This is useful to 
// isolate specific modules for every test so that local module state doesn't conflict between tests.

test('jest.isolateModules', () => {
    let myModule;
    jest.isolateModules(() => {
      myModule = require('../myModule');
    });
    
    const otherCopyOfMyModule = require('../myModule');

    expect ( myModule === otherCopyOfMyModule).toBe(false);
});

// PASS  __tests__/jest.isolateModules.test.js
// √ jest.isolateModules (4 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total