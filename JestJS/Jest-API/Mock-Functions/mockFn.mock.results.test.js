test('test mock results', () => {
    let f = jest.fn((a,b) => a + b);
    f.mockReturnValueOnce('result1')  
        .mockReturnValueOnce('result2');


    f('arg1', 'arg2');
    f('arg3', 'arg4');
            
    // console.log(f.mock.results);
    expect(f.mock.results[0].type).toBe("return");
    expect(f.mock.results[0].value).toBe("result1");
    expect(f.mock.results[1].type).toBe("return");
    expect(f.mock.results[1].value).toBe("result2");

});

test("test mock results - exception", () => {
    let f = jest.fn((a,b) => a + b);
    f.mockImplementation((a,b) => { throw new Error("my error")}) ;

    try {
        f('arg1', 'arg2');
    }
    catch (error) {
        // console.log(error);
    }
    
    // console.log(f.mock.results);
    console.log(typeof f.mock.results[0].value);
    expect(f.mock.results[0].type).toBe("throw");
});