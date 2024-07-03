
function testFunction () { return true ; }

describe('Before and After Tests', () => {
    let testNumber = 0 ;

    beforeAll(() => { return console.log(`Before All Tests ${new Date()}`); });
    beforeEach( () => { return console.log(`Before Test #${++testNumber} ${new Date()}`)});
    afterEach( () => { return console.log(`After Test #${testNumber} ${new Date()}`)});
    afterAll( () => { return console.log(`After All Tests ${new Date()}`)});

    test('Test #1', () => { console.log("Executing Test #1 " + new Date().toString());})
    test('Test #2', () => { console.log("Executing Test #2 " + new Date().toString());})

})