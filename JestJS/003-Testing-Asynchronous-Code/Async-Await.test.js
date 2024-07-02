// Async/Await

// Alternatively, you can use async and await in your tests. To write an async test, 
// use the async keyword in front of the function passed to test. For example, the 
// same fetchData scenario can be tested with:

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
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (error) {
    expect(error).toMatch('error');
  }
});