// describe.only.each(table)(name, fn)

// Also under the aliases: fdescribe.each(table)(name, fn) and fdescribe.each`table`(name, fn)

// Use describe.only.each if you want to only run specific tests suites of data driven tests.

// describe.only.each is available with two APIs:

// describe.only.each(table)(name, fn)

describe.only.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
  test(`returns ${expected}`, () => {
    expect(a + b).toBe(expected);
  });
});

test('will not be run', () => {
  expect(1 / 0).toBe(Infinity);
});