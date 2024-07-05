// expect.objectContaining(object)

// expect.objectContaining(object) matches any received object that recursively matches 
// the expected properties. That is, the expected object is a subset of the received object. 
// Therefore, it matches a received object which contains properties that are present in 
// the expected object.

// Instead of literal property values in the expected object, you can use matchers, 
// expect.anything(), and so on.

// For example, let's say that we expect an onPress function to be called with an Event 
// object, and all we need to verify is that the event has event.x and event.y properties. 
// We can do that with:

function randomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function simulatePresses(onPress) {
    for (let i = 1; i <= 1000; i++) {
        onPress({ x: randomInteger(1000), y: randomInteger(1000) });
    }
}

test('onPress gets called with the right thing', () => {
    const onPress = jest.fn();
    simulatePresses(onPress);
    expect(onPress).toHaveBeenCalledWith(
        expect.objectContaining({
            x: expect.any(Number),
            y: expect.any(Number),
        }),
    );
});

// PASS  ./expect.objectContaining.test.js
// √ onPress gets called with the right thing (3 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total