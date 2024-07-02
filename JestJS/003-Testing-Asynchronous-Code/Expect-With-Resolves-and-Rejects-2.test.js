// .resolves / .rejects

// If you expect a promise to be rejected, use the .rejects matcher. It works analogically 
// to the .resolves matcher. If the promise is fulfilled, the test will automatically fail.


function fetchData() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("error");
        }, 300);
    });

    return myPromise;
}

test('the fetch fails with an error', () => {
    return expect(fetchData()).rejects.toMatch('error');
});

//   None of these forms is particularly superior to the others, and you can mix and
//   match them across a codebase or even in a single file. It just depends on which
//   style you feel makes your tests simpler.
