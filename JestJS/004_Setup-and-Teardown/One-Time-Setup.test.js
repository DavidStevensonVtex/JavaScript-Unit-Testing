// One-Time Setup

// In some cases, you only need to do setup once, at the beginning of a file. This can be 
// especially bothersome when the setup is asynchronous, so you can't do it inline. Jest 
// provides beforeAll and afterAll hooks to handle this situation.

// For example, if both initializeCityDatabase() and clearCityDatabase() returned promises, 
// and the city database could be reused between tests, we could change our test code to:

let cityDatabase = [] ;

function fetchData() {
    const myPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve( [ "Vienna", "San Juan" ]);
        }, 300);
    });

    return myPromise ;
}

function initializeCityDatabase(){ 
    return fetchData().then ( data => {
        cityDatabase = data ;
    })
}

function clearCityDatabase() {
    return fetchData().then ( data => {
        cityDatabase = [];
    })
}

function isCity(city) {
    return cityDatabase.includes(city);
}

beforeAll(() => {
  return initializeCityDatabase();
});

afterAll(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});