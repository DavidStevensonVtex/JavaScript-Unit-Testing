// .toMatchObject(object)

// Use .toMatchObject to check that a JavaScript object matches a subset of the properties of an object. 
// It will match received objects with properties that are not in the expected object.

// You can also pass an array of objects, in which case the method will return true only if each object 
// in the received array matches (in the toMatchObject sense described above) the corresponding object 
// in the expected array. This is useful if you want to check that two arrays match in their number of 
// elements, as opposed to arrayContaining, which allows for extra elements in the received array.

// You can match properties against values or against matchers.

const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ['oven', 'stove', 'washer'],
    area: 20,
    wallColor: 'white',
  },
};

const desiredHouse = {
  bath: true,
  kitchen: {
    amenities: ['oven', 'stove', 'washer'],
    wallColor: expect.stringMatching(/white|yellow/),
  },
};

test('the house has my desired features', () => {
  expect(houseForSale).toMatchObject(desiredHouse);
});

describe('toMatchObject applied to arrays', () => {
  test('the number of elements must match exactly', () => {
    expect([{foo: 'bar'}, {baz: 1}]).toMatchObject([{foo: 'bar'}, {baz: 1}]);
  });

  test('.toMatchObject is called for each elements, so extra object properties are okay', () => {
    expect([{foo: 'bar'}, {baz: 1, extra: 'quux'}]).toMatchObject([
      {foo: 'bar'},
      {baz: 1},
    ]);
  });
});

// PASS  ./expect.toMatchObject.test.js
// √ the house has my desired features (2 ms)
// toMatchObject applied to arrays
//   √ the number of elements must match exactly
//   √ .toMatchObject is called for each elements, so extra object properties are okay

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total