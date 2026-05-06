// Replace these with actual DB calls (Mongoose, Prisma, etc.)
const users = [{ id: "1", name: "Shubh", email: "shubh@example.com" }];

exports.findAll = async () => users;

exports.findById = async (id) => users.find((u) => u.id === id) || null;

exports.create = async (data) => {
  const user = { id: String(Date.now()), ...data };
  users.push(user);
  return user;
};
