// test.failing(name, fn, timeout)
// Also under the alias: it.failing(name, fn, timeout)

// NOTE
// This is only available with the default jest-circus runner.

// Use test.failing when you are writing a test and expecting it to fail. 
// These tests will behave the other way normal tests do. If failing test 
// will throw any errors then it will pass. If it does not throw it will 
// fail.

// TIP
// You can use this type of test i.e. when writing code in a BDD way. In 
// that case the tests will not show up as failing until they pass. Then 
// you can just remove the failing modifier to make them pass.

// It can also be a nice way to contribute failing tests to a project, 
// even if you don't know how to fix the bug.

// Example:

test.failing('it is not equal', () => {
  expect(5).toBe(6); // this test will pass
});

test.failing('it is equal', () => {
  expect(10).toBe(10); // this test will fail
});