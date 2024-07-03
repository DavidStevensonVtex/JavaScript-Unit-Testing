test('someMockFunction test', () => {

    const element = { name: 'test' } ;
    const someMockFunction = jest.fn( (x,y) => 'return value');
    const bound = someMockFunction.bind(element);
    const returnValue = bound('first arg', 'second arg');

    // The function was called exactly once
    expect(someMockFunction.mock.calls).toHaveLength(1);

    // The first arg of the first call to the function was 'first arg'
    expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

    // The second arg of the first call to the function was 'second arg'
    expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

    // The return value of the first call to the function was 'return value'
    expect(someMockFunction.mock.results[0].value).toBe('return value');

    // The function was called with a certain `this` context: the `element` object.
    expect(someMockFunction.mock.contexts[0]).toBe(element);

    const b = new someMockFunction('test');
    console.log("someMockFunction.mock.instances", someMockFunction.mock.instances);
    console.log("someMockFunction.mock.instances.length", someMockFunction.mock.instances.length);
    // This function was instantiated exactly twice
    expect(someMockFunction.mock.instances.length).toBe(2);

    // The object returned by the first instantiation of this function
    // had a `name` property whose value was set to 'test'
    expect(someMockFunction.mock.instances[0].name).toBe('test');

    console.log("someMockFunction.mock.lastCall", someMockFunction.mock.lastCall);
    // The first argument of the last call to the function was 'test'
    expect(someMockFunction.mock.lastCall[0]).toBe('test');
})