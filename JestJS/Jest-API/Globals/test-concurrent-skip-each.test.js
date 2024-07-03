// test.concurrent.skip.each(table)(name, fn)

// Also under the alias: it.concurrent.skip.each(table)(name, fn)

// Use test.concurrent.skip.each if you want to stop running a collection 
// of asynchronous data driven tests.

// test.concurrent.skip.each is available with two APIs:

// test.concurrent.skip.each(table)(name, fn)

test.concurrent.skip.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
])('.add(%i, %i)', async (a, b, expected) => {
    expect(a + b).toBe(expected); // will not be run
});

test('will be run', () => {
    expect(1 / 0).toBe(Infinity);
});