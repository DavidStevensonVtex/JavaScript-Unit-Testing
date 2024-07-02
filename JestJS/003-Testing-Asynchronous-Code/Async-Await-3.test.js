// Async/Await

// CAUTION
// Be sure to return (or await) the promise - if you omit the return/await statement, your test 
// will complete before the promise returned from fetchData resolves or rejects.

// If you expect a promise to be rejected, use the .catch method. Make sure to add expect.assertions 
// to verify that a certain number of assertions are called. Otherwise, a fulfilled promise would 
// not fail the test.

function fetchData() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error");
        }, 300);
    });

    return myPromise;
}

test('the fetch fails with an error', () => {
    expect.assertions(1);
    return fetchData().catch(error => expect(error).toMatch('error'));
});