// .toHaveBeenCalledTimes(number) matcher

// Also under the alias: .toBeCalledTimes(number)

// Use .toHaveBeenCalledTimes to ensure that a mock function got called exact number of times.

// For example, let's say you have a drinkEach(drink, Array<flavor>) function that takes a drink 
// function and applies it to array of passed beverages. You might want to check that drink 
// function was called exact number of times. You can do that with this test suite:

function drinkEach(callback, flavors) {
    for ( let flavor of flavors ) {
        callback(flavor) ;
    }
}

test('drinkEach drinks each drink', () => {
    const drink = jest.fn();
    drinkEach(drink, ['lemon', 'octopus']);
    expect(drink).toHaveBeenCalledTimes(2);
});

// PASS  ./expect.toHaveBeenCalledTimes.test.js
// √ drinkEach drinks each drink (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total