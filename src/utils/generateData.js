const { faker } = require("@faker-js/faker");
function createRandomUser() {
  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
  };
}

module.exports = function generateData() {
  return faker.helpers.multiple(createRandomUser, {
    count: 100,
  });
};
