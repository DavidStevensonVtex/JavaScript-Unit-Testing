test('myMock1 and myMock2 test', () => {
    const myMock1 = jest.fn();
    const a = new myMock1();
    console.log(myMock1.mock.instances);
    // [ mockConstructor {} ]

    const myMock2 = jest.fn();
    const b = { a: 'one', b: 'two' };
    const bound = myMock2.bind(b);
    bound();
    console.log(myMock2.mock.contexts);
    // [ { a: 'one', b: 'two' } ]
})