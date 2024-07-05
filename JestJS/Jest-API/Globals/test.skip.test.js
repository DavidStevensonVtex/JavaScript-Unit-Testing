// test.skip(name, fn)

// Also under the aliases: it.skip(name, fn), xit(name, fn), and xtest(name, fn)

// When you are maintaining a large codebase, you may sometimes find a test that 
// is temporarily broken for some reason. If you want to skip running this test, 
// but you don't want to delete this code, you can use test.skip to specify some 
// tests to skip.

// For example, let's say you had these tests:

function inchesOfRain() {
    return 1;
}

function inchesOfSnow() {
    return 1 ;
}

test('it is raining', () => {
  expect(inchesOfRain()).toBeGreaterThan(0);
});

test.skip('it is not snowing', () => {
  expect(inchesOfSnow()).toBe(0);
});

// Only the "it is raining" test will run, since the other test is run with test.skip.

// You could comment the test out, but it's often a bit nicer to use test.skip because 
// it will maintain indentation and syntax highlighting.

// Test Suites: 1 passed, 1 total
// Tests:       1 skipped, 1 passed, 2 total