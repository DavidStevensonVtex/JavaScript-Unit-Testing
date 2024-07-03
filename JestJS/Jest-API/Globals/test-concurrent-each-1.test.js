// test.concurrent.each(table)(name, fn, timeout)

// Also under the alias: it.concurrent.each(table)(name, fn, timeout)

// Use test.concurrent.each if you keep duplicating the same test with different data. 
// test.each allows you to write the test once and pass data in, the tests are all run 
// asynchronously.

// test.concurrent.each is available with two APIs:

// 1. test.concurrent.each(table)(name, fn, timeout)
// table: Array of Arrays with the arguments that are passed into the test fn for 
// each row. If you pass in a 1D array of primitives, internally it will be mapped 
// to a table i.e. [1, 2, 3] -> [[1], [2], [3]]

// name: String the title of the test block.

// Generate unique test titles by positionally injecting parameters with printf formatting:

// %p - pretty-format.
// %s- String.
// %d- Number.
// %i - Integer.
// %f - Floating point value.
// %j - JSON.
// %o - Object.
// %# - Index of the test case.
// %% - single percent sign ('%'). This does not consume an argument.

// fn: Function the test to be run, this is the function that will receive the parameters 
// in each row as function arguments, this will have to be an asynchronous function.

// Optionally, you can provide a timeout (in milliseconds) for specifying how long to 
// wait for each row before aborting. The default timeout is 5 seconds.

// Example:

test.concurrent.each([
    [1, 1, 2],
    [1, 2, 3],
    [2, 1, 3],
])('.add(%i, %i)', async (a, b, expected) => {
    expect(a + b).toBe(expected);
});