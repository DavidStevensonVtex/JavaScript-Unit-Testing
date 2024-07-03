// test(name, fn, timeout)

// If a promise is returned from test, Jest will wait for the promise to resolve before 
// letting the test complete. For example, let's say fetchBeverageList() returns a promise 
// that is supposed to resolve to a list that has lemon in it. You can test this with:

function fetchBeverageList() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("issuing resolve");
            resolve(["apple", "lime", "lemon", "banana" ]);
        }, 900);
    });

    return myPromise ;
}

test('has lemon in it', () => {
  return fetchBeverageList().then(list => {
    expect(list).toContain('lemon');
  });
});

// Even though the call to test will return right away, the test doesn't complete until 
// the promise resolves. For more details, see Testing Asynchronous Code page.
