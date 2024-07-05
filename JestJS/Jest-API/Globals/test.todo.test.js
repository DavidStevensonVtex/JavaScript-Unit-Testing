// test.todo(name)

// Also under the alias: it.todo(name)

// Use test.todo when you are planning on writing tests. These tests will be highlighted 
// in the summary output at the end so you know how many tests you still need todo.

const add = (a, b) => a + b;

test.todo('add should be associative');

// TIP
// test.todo will throw an error if you pass it a test callback function. Use test.skip 
// instead, if you already implemented the test, but do not want it to run.

// Test Suites: 1 passed, 1 total
// Tests:       1 todo, 1 total