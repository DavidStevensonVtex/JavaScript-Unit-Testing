// Setup and Teardown

// Often while writing tests you have some setup work that needs to happen before tests run, and you 
// have some finishing work that needs to happen after tests run. Jest provides helper functions to 
// handle this.

// Repeating Setup

// beforeEach and afterEach can handle asynchronous code in the same ways that tests can handle 
// asynchronous code - they can either take a done parameter or return a promise. For example, 
// if initializeCityDatabase() returned a promise that resolved when the database was initialized, 
// we would want to return that promise:


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

beforeEach(() => {
  return initializeCityDatabase();
});

afterEach(() => {
  return clearCityDatabase();
});

test('city database has Vienna', () => {
  expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
  expect(isCity('San Juan')).toBeTruthy();
});