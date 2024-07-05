// .toStrictEqual(value)

// Use .toStrictEqual to test that objects have the same structure and type.

// Differences from .toEqual:

// • keys with undefined properties are checked, e.g. {a: undefined, b: 2} will not equal {b: 2};
// • undefined items are taken into account, e.g. [2] will not equal [2, undefined];
// • array sparseness is checked, e.g. [, 1] will not equal [undefined, 1];
// • object types are checked, e.g. a class instance with fields a and b will not equal a literal object with fields a and b.

class LaCroix {
  constructor(flavor) {
    this.flavor = flavor;
  }
}

describe('the La Croix cans on my desk', () => {
  test('are not semantically the same', () => {
    expect(new LaCroix('lemon')).toEqual({flavor: 'lemon'});
    expect(new LaCroix('lemon')).not.toStrictEqual({flavor: 'lemon'});
  });
});

// PASS  ./expect.toStrictEqual.test.js
// the La Croix cans on my desk
//   √ are not semantically the same (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total