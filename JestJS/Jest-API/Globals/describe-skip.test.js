// describe.skip(name, fn)

// Also under the alias: xdescribe(name, fn)

// You can use describe.skip if you do not want to run the tests of a particular describe block:

const myBeverage = {
    delicious: true,
    sour: false,
};

describe('my beverage', () => {
    test('is delicious', () => {
        expect(myBeverage.delicious).toBeTruthy();
    });

    test('is not sour', () => {
        expect(myBeverage.sour).toBeFalsy();
    });
});

describe.skip('my other beverage', () => {
    // ... will be skipped
    test('Skipped Test', () => {
        expect(myBeverage.sour).toBeFalsy();
    });
});

// Using describe.skip is often a cleaner alternative to temporarily commenting out a chunk of tests.
// Beware that the describe block will still run. If you have some setup that also should be skipped,
// do it in a beforeAll or beforeEach block.
