const { faker } = require("@faker-js/faker");

// Single Address Generator
function createAddress() {
  return {
    country: faker.location.country(),
    state: faker.location.state(),
    city: faker.location.city(),
    street: faker.location.street(),
    streetAddress: faker.location.streetAddress(),
    secondaryAddress: faker.location.secondaryAddress(),
    zipCode: faker.location.zipCode(),
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude(),
  };
}

let add = createAddress();
console.log(add);

// Multiple Address Generator
function generateAddresses(count) {
  function createAddress() {
    return {
      country: faker.location.country(),
      state: faker.location.state(),
      city: faker.location.city(),
      street: faker.location.street(),
      streetAddress: faker.location.streetAddress(),
      secondaryAddress: faker.location.secondaryAddress(),
      zipCode: faker.location.zipCode(),
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
    };
  }

  return (addresses = Array.from({ length: count }, () => createAddress()));
}
module.exports = generateAddresses;
