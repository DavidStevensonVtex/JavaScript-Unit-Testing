// .toContainEqual(item)

// Use .toContainEqual when you want to check that an item with a specific structure and 
// values is contained in an array. For testing the items in the array, this matcher 
// recursively checks the equality of all fields, rather than checking for object identity.

const myBeverage = {delicious: true, sour: false};
const anotherBeverage = { delicious: false, sour: true};
function myBeverages() { return [ anotherBeverage, myBeverage, anotherBeverage ] }

describe('my beverage', () => {
  test('is delicious and not sour', () => {
    expect(myBeverages()).toContainEqual(myBeverage);
  });
});

// PASS  ./expect.toContainEqual.test.js
// my beverage
//   √ is delicious and not sour (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total