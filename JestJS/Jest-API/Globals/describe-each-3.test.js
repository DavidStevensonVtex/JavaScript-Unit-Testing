describe.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('$a + $b', ({ a, b, expected }) => {
    test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected);
    });

    test(`returned value not be greater than ${expected}`, () => {
        expect(a + b).not.toBeGreaterThan(expected);
    });

    test(`returned value not be less than ${expected}`, () => {
        expect(a + b).not.toBeLessThan(expected);
    });
});