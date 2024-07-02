// Testing Asynchronous Code

// It's common in JavaScript for code to run asynchronously. When you have code that runs asynchronously,
// Jest needs to know when the code it is testing has completed, before it can move on to another test. 
// Jest has several ways to handle this.

// Promises

// Return a promise from your test, and Jest will wait for that promise to resolve. If the promise is 
// rejected, the test will fail.

// For example, let's say that fetchData returns a promise that is supposed to resolve to the string 'peanut butter'. 
// We could test it with:

function fetchData() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log("issuing resolve");
            resolve("peanut butter");
        }, 300);
    });

    return myPromise ;
}

test('the data is peanut butter', () => {
    return fetchData().then(data => {
        // console.log("data", data);
        expect(data).toBe('peanut butter');
    });
});