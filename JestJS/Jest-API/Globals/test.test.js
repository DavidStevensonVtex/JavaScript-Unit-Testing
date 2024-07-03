// test(name, fn, timeout)

// Also under the alias: it(name, fn, timeout)

// All you need in a test file is the test method which runs a test. For example, 
// let's say there's a function inchesOfRain() that should be zero. Your whole test 
// could be:

function inchesOfRain() { return 0 }

test('did not rain', () => {
  expect(inchesOfRain()).toBe(0);
});

// The first argument is the test name; the second argument is a function that 
// contains the expectations to test. The third argument (optional) is timeout 
// (in milliseconds) for specifying how long to wait before aborting. The 
// default timeout is 5 seconds.
