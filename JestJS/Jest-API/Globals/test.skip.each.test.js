// test.skip.each(table)(name, fn)

// Also under the aliases: it.skip.each(table)(name, fn), xit.each(table)(name, fn), 
// xtest.each(table)(name, fn), it.skip.each`table`(name, fn), xit.each`table`(name, fn) 
// and xtest.each`table`(name, fn)

// Use test.skip.each if you want to stop running a collection of data driven tests.

// test.skip.each is available with two APIs:

// test.skip.each(table)(name, fn)
test.skip.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
  expect(a + b).toBe(expected); // will not be run
});

test('will be run', () => {
  expect(1 / 0).toBe(Infinity);
});

// test.skip.each`table`(name, fn)

test.skip.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added to $b', ({a, b, expected}) => {
  expect(a + b).toBe(expected); // will not be run
});

test('will be run', () => {
  expect(1 / 0).toBe(Infinity);
});

// Test Suites: 1 passed, 1 total
// Tests:       6 skipped, 2 passed, 8 total