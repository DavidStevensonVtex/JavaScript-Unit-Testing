const example = jest.createMockFromModule('../example');

test('should run example code', () => {
  // creates a new mocked function with no formal arguments.
  expect(example.function.name).toBe('square');
  expect(example.function).toHaveLength(0);

  // async functions get the same treatment as standard synchronous functions.
  expect(example.asyncFunction.name).toBe('asyncSquare');
  expect(example.asyncFunction).toHaveLength(0);

  // creates a new class with the same interface, member functions and properties are mocked.
  expect(example.class.constructor.name).toBe('Bar');
  expect(example.class.foo.name).toBe('foo');
  expect(example.class.array).toHaveLength(0);

  // creates a deeply cloned version of the original object.
  expect(example.object).toEqual({
    baz: 'foo',
    bar: {
      fiz: 1,
      buzz: [],
    },
  });

  // creates a new empty array, ignoring the original array.
  expect(example.array).toHaveLength(0);

  // creates a new property with the same primitive value as the original property.
  expect(example.number).toBe(123);
  expect(example.string).toBe('baz');
  expect(example.boolean).toBe(true);
  expect(example.symbol).toEqual(Symbol.for('a.b.c'));
});

// PASS  __tests__/example.test.js
// √ should run example code (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total