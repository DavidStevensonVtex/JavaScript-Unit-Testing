// .toHaveProperty(keyPath, value?)

// Use .toHaveProperty to check if property at provided reference keyPath exists for an object. 
// For checking deeply nested properties in an object you may use dot notation or an array 
// containing the keyPath for deep references.

// You can provide an optional value argument to compare the received property value (recursively 
//     for all properties of object instances, also known as deep equality, like the toEqual matcher).

// The following example contains a houseForSale object with nested properties. We are using toHaveProperty 
// to check for the existence and values of various properties in the object.

// Object containing house features to be tested
const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ['oven', 'stove', 'washer'],
    area: 20,
    wallColor: 'white',
    'nice.oven': true,
  },
  livingroom: {
    amenities: [
      {
        couch: [
          ['large', {dimensions: [20, 20]}],
          ['small', {dimensions: [10, 10]}],
        ],
      },
    ],
  },
  'ceiling.height': 2,
};

test('this house has my desired features', () => {
  // Example Referencing
  expect(houseForSale).toHaveProperty('bath');
  expect(houseForSale).toHaveProperty('bedrooms', 4);

  expect(houseForSale).not.toHaveProperty('pool');

  // Deep referencing using dot notation
  expect(houseForSale).toHaveProperty('kitchen.area', 20);
  expect(houseForSale).toHaveProperty('kitchen.amenities', [
    'oven',
    'stove',
    'washer',
  ]);

  expect(houseForSale).not.toHaveProperty('kitchen.open');

  // Deep referencing using an array containing the keyPath
  expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);
  expect(houseForSale).toHaveProperty(
    ['kitchen', 'amenities'],
    ['oven', 'stove', 'washer'],
  );
  expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');
  expect(houseForSale).toHaveProperty(
    'livingroom.amenities[0].couch[0][1].dimensions[0]',
    20,
  );
  expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven']);
  expect(houseForSale).not.toHaveProperty(['kitchen', 'open']);

  // Referencing keys with dot in the key itself
//   expect(houseForSale).toHaveProperty(['ceiling.height'], 'tall');
});

// PASS  ./expect.toHaveProperty.test.js
// √ this house has my desired features (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total