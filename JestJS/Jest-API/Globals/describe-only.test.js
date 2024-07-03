// describe.only(name, fn)

// Also under the alias: fdescribe(name, fn)

// You can use describe.only if you want to run only one describe block:

const myBeverage = {
    delicious: true,
    sour: false,
};

describe.only('my beverage', () => {
    test('is delicious', () => {
        expect(myBeverage.delicious).toBeTruthy();
    });

    test('is not sour', () => {
        expect(myBeverage.sour).toBeFalsy();
    });
});

describe('my other beverage', () => {
    // ... will be skipped
    test('Skipped Test', () => {
        expect(myBeverage.sour).toBeFalsy();
    });
});