// expect.not.objectContaining(object)

// expect.not.objectContaining(object) matches any received object that does not recursively 
// match the expected properties. That is, the expected object is not a subset of the received 
// object. Therefore, it matches a received object which contains properties that are not 
// in the expected object.

// It is the inverse of expect.objectContaining.

describe('not.objectContaining', () => {
  const expected = {foo: 'bar'};

  it('matches if the actual object does not contain expected key: value pairs', () => {
    expect({bar: 'baz'}).toEqual(expect.not.objectContaining(expected));
  });
});

// not.objectContaining
// √ matches if the actual object does not contain expected key: value pairs (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total