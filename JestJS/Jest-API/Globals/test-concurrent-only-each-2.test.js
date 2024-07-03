// test.only.each`table`(name, fn)

test.concurrent.only.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added to $b', async ({ a, b, expected }) => {
    expect(a + b).toBe(expected);
});

test('will not be run', () => {
    expect(1 / 0).toBe(Infinity);
});