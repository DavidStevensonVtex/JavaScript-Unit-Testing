// test.only(name, fn, timeout)

// Also under the aliases: it.only(name, fn, timeout), and fit(name, fn, timeout)

// When you are debugging a large test file, you will often only want to run a subset of tests. 
// You can use .only to specify which tests are the only ones you want to run in that test file.

// Optionally, you can provide a timeout (in milliseconds) for specifying how long to wait before 
// aborting. The default timeout is 5 seconds.

// For example, let's say you had these tests:

test.only('it is raining', () => {
  expect(inchesOfRain()).toBeGreaterThan(0);
});

test('it is not snowing', () => {
  expect(inchesOfSnow()).toBe(0);
});

// Only the "it is raining" test will run in that test file, since it is run with test.only.

// Usually you wouldn't check code using test.only into source control - you would use it for 
// debugging, and remove it once you have fixed the broken tests.

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 skipped, 2 total