// describe.skip.each(table)(name, fn)

// Also under the aliases: xdescribe.each(table)(name, fn) and xdescribe.each`table`(name, fn)

// Use describe.skip.each if you want to stop running a suite of data driven tests.

// describe.skip.each is available with two APIs:

// describe.skip.each(table)(name, fn)

describe.skip.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
])('.add(%i, %i)', (a, b, expected) => {
    test(`returns ${expected}`, () => {
        expect(a + b).toBe(expected); // will not be run
    });
});

test('will be run', () => {
    expect(1 / 0).toBe(Infinity);
});