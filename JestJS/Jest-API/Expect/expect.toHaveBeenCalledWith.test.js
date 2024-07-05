// .toHaveBeenCalledWith(arg1, arg2, ...) 

// Also under the alias: .toBeCalledWith()

// Use .toHaveBeenCalledWith to ensure that a mock function was called with specific arguments. 
// The arguments are checked with the same algorithm that .toEqual uses.

// For example, let's say that you can register a beverage with a register function, and 
// applyToAll(f) should apply the function f to all registered beverages. To make sure 
// this works, you could write:

function LaCroix(flavor) {
    this.flavor = flavor ;
}

const registeredBeverages = [];
function register(b) {
    registeredBeverages.push(b);
    // console.log("registeredBeverages", registeredBeverages);
}

function applyToAll(func) {
    registeredBeverages.forEach(bev => func(bev));
}

test('registration applies correctly to orange La Croix', () => {
  const beverage = new LaCroix('orange');
  register(beverage);
  const f = jest.fn();
  applyToAll(f);
  expect(f).toHaveBeenCalledWith(beverage);
});

// PASS  ./expect.toHaveBeenCalledWith.test.js
// √ registration applies correctly to orange La Croix (14 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total