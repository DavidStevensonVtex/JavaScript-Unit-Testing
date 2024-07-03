// test.concurrent.only.each(table)(name, fn)

// Also under the alias: it.concurrent.only.each(table)(name, fn)

// Use test.concurrent.only.each if you want to only run specific tests 
// with different test data concurrently.

// test.concurrent.only.each is available with two APIs:

// test.concurrent.only.each(table)(name, fn)

test.concurrent.only.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
])('.add(%i, %i)', async (a, b, expected) => {
    expect(a + b).toBe(expected);
});

test('will not be run', () => {
    expect(1 / 0).toBe(Infinity);
});