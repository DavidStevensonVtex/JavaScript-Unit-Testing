function CustomError(error) { return error ; }

const binaryStringToNumber = binString => {
    if (!/^[01]+$/.test(binString)) {
        throw new CustomError('Not a binary number.');
    }

    return parseInt(binString, 2);
};

describe('binaryStringToNumber', () => {
    describe('given an invalid binary string', () => {
        test('composed of non-numbers throws CustomError', () => {
            expect(() => binaryStringToNumber('abc')).toThrow(CustomError);
        });

        test('with extra whitespace throws CustomError', () => {
            expect(() => binaryStringToNumber('  100')).toThrow(CustomError);
        });
    });

    describe('given a valid binary string', () => {
        test('returns the correct number', () => {
            expect(binaryStringToNumber('100')).toBe(4);
        });
    });
});