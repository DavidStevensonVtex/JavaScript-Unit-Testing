// 2. test.each`table`(name, fn, timeout)

// Optionally, you can provide a timeout (in milliseconds) for specifying how long to 
// wait for each row before aborting. The default timeout is 5 seconds.

// Example:

test.each`
  a    | b    | expected
  ${1} | ${1} | ${2}
  ${1} | ${2} | ${3}
  ${2} | ${1} | ${3}
`('returns $expected when $a is added to $b', ({ a, b, expected }) => {
    expect(a + b).toBe(expected);
});