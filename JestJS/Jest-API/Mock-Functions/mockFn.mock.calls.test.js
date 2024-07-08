test('test mock calls', () => {
    let f = jest.fn((a,b) => a + b);
    f('arg1', 'arg2');
    f('arg3', 'arg4');
    // console.log(f.mock.calls);
    // console.log(f.mock.calls[0]);
    // console.log(f.mock.calls[0][0]);
    expect(f.mock.calls[0][0]).toBe('arg1');
    expect(f.mock.calls[0][1]).toBe('arg2');
    expect(f.mock.calls[1][0]).toBe('arg3');
    expect(f.mock.calls[1][1]).toBe('arg4');
});