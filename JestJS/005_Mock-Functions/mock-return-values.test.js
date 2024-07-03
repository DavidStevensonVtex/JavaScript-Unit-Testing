// Mock Return Values

// Mock functions can also be used to inject test values into your code during a test:

test('Mock Return Values', () => {
    const myMock = jest.fn();
    console.log("myMock()", myMock());
    // > undefined

    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);

    console.log(myMock(), myMock(), myMock(), myMock());
    // > 10, 'x', true, true
})