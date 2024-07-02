// Async/Await

// You can combine async and await with .resolves or .rejects.

let count = 1;

function fetchData() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if ( count === 1) {
                resolve("peanut butter");
            } else {
                reject("error");
            }
            count++ ;
        }, 300);
    });

    return myPromise ;
}

test('the data is peanut butter', async () => {
    await expect(fetchData()).resolves.toBe('peanut butter');
  });
  
  test('the fetch fails with an error', async () => {
    await expect(fetchData()).rejects.toMatch('error');
  });