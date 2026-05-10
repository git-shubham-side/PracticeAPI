const { faker } = require("@faker-js/faker");

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

function generateAddresses(count = 100) {
  return Array.from({ length: count }, createAddress);
}

module.exports = generateAddresses;
