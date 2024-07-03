// test.each(table)(name, fn, timeout)

// Also under the alias: it.each(table)(name, fn) and it.each`table`(name, fn)

// Use test.each if you keep duplicating the same test with different data. 
// test.each allows you to write the test once and pass data in.

// test.each is available with two APIs:

// 1. test.each(table)(name, fn, timeout)

test.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
    expect(a + b).toBe(expected);
});