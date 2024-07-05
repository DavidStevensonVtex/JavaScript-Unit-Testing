// test.only.each(table)(name, fn)

// Also under the aliases: it.only.each(table)(name, fn), fit.each(table)(name, fn), 
// it.only.each`table`(name, fn) and fit.each`table`(name, fn)

// Use test.only.each if you want to only run specific tests with different test data.

// test.only.each is available with two APIs:

// test.only.each(table)(name, fn)

test.only.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
  expect(a + b).toBe(expected);
});

test('will not be run', () => {
  expect(1 / 0).toBe(Infinity);
});

// test.only.each`table`(name, fn)

test.only.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added to $b', ({a, b, expected}) => {
  expect(a + b).toBe(expected);
});

test('will not be run', () => {
  expect(1 / 0).toBe(Infinity);
});

// Test Suites: 1 passed, 1 total
// Tests:       2 skipped, 6 passed, 8 total