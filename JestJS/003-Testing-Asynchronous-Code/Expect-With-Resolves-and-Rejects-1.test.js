// .resolves / .rejects

// You can also use the .resolves matcher in your expect statement, and Jest will wait for that 
// promise to resolve. If the promise is rejected, the test will automatically fail.

function fetchData() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("issuing resolve");
            resolve("peanut butter");
        }, 300);
    });

    return myPromise;
}

test('the data is peanut butter', () => {
  return expect(fetchData()).resolves.toBe('peanut butter');
});

// Be sure to return the assertion—if you omit this return statement, your test will complete 
// before the promise returned from fetchData is resolved and then() has a chance to execute 
// the callback.