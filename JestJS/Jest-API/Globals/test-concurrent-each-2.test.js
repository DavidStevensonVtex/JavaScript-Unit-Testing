// test.concurrent.each`table`(name, fn, timeout)

test.concurrent.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added to $b', async ({ a, b, expected }) => {
    expect(a + b).toBe(expected);
});