// test.failing.each(name, fn, timeout)

// Also under the alias: it.failing.each(table)(name, fn) and it.failing.each`table`(name, fn)

// NOTE: This is only available with the default jest-circus runner.

// You can also run multiple tests at once by adding each after failing.

// Example:

test.failing.each([
  {a: 1, b: 1, expected: 2},
  {a: 1, b: 2, expected: 3},
  {a: 2, b: 1, expected: 3},
])('.add($a, $b)', ({a, b, expected}) => {
  expect(a + b).toBe(expected);
});