// describe.only.each(table)(name, fn)

// Also under the aliases: fdescribe.each(table)(name, fn) and fdescribe.each`table`(name, fn)

// Use describe.only.each if you want to only run specific tests suites of data driven tests.

// describe.only.each is available with two APIs:

// describe.only.each`table`(name, fn)

describe.only.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added to $b', ({ a, b, expected }) => {
    test('passes', () => {
        expect(a + b).toBe(expected);
    });
});

test('will not be run', () => {
    expect(1 / 0).toBe(Infinity);
});