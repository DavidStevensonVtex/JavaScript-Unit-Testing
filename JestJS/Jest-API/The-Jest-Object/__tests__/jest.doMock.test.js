beforeEach(() => {
    jest.resetModules();
});

test('moduleName 1', () => {
    jest.doMock('../moduleName', () => {
        return jest.fn(() => 1);
    });
    const moduleName = require('../moduleName');
    expect(moduleName()).toBe(1);
});

test('moduleName 2', () => {
    jest.doMock('../moduleName', () => {
        return jest.fn(() => 2);
    });
    const moduleName = require('../moduleName');
    expect(moduleName()).toBe(2);
});