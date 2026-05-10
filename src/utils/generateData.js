const { faker } = require("@faker-js/faker");

function createRandomUser() {
  const emailToken = faker.string.alphanumeric(10).toLowerCase();

  return {
    userId: faker.string.uuid(),
    username: faker.internet.username(),
    email: `${emailToken}@example.com`,
    avatar: faker.image.avatar(),
    password: faker.internet.password({ length: 12 }),
    birthdate: faker.date.birthdate(),
  };
}

module.exports = function generateData(count = 100) {
  return faker.helpers.multiple(createRandomUser, {
    count,
  });
};
