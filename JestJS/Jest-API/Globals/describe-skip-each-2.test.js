// describe.skip.each(table)(name, fn)

// Also under the aliases: xdescribe.each(table)(name, fn) and xdescribe.each`table`(name, fn)

// Use describe.skip.each if you want to stop running a suite of data driven tests.

// describe.skip.each is available with two APIs:

// describe.skip.each`table`(name, fn)

describe.skip.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added to $b', ({ a, b, expected }) => {
    test('will not be run', () => {
        expect(a + b).toBe(expected); // will not be run
    });
});

test('will be run', () => {
    expect(1 / 0).toBe(Infinity);
});