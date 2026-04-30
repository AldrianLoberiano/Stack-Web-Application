const { randomUUID } = require('crypto');

const users = [];
const contacts = [];

const initializeDatabase = async () => {
  return undefined;
};

const createUser = async ({ firstName, lastName, email, password, company, plan }) => {
  const now = new Date().toISOString();
  const user = {
    id: randomUUID(),
    firstName,
    lastName,
    email: email.toLowerCase(),
    password,
    company: company || '',
    plan: plan || 'starter',
    role: 'user',
    avatar: '',
    createdAt: now,
  };

  users.push(user);
  return { ...user };
};

const findUserByEmail = async (email, options = {}) => {
  const user = users.find((entry) => entry.email === String(email).toLowerCase());

  if (!user) {
    return null;
  }

  if (options.includePassword) {
    return { ...user };
  }

  const { password, ...publicUser } = user;
  return { ...publicUser };
};

const findUserById = async (id) => {
  const user = users.find((entry) => entry.id === id);

  if (!user) {
    return null;
  }

  const { password, ...publicUser } = user;
  return { ...publicUser };
};

const listUsers = async () => {
  return users.map(({ password, ...user }) => ({ ...user }));
};

const createContact = async ({ firstName, lastName, email, company, subject, message }) => {
  const contact = {
    id: randomUUID(),
    firstName,
    lastName,
    email: email.toLowerCase(),
    company: company || '',
    subject: subject || 'General Inquiry',
    message,
    status: 'new',
    createdAt: new Date().toISOString(),
  };

  contacts.push(contact);
  return { ...contact };
};

const listContacts = async () => {
  return contacts.map((contact) => ({ ...contact }));
};

module.exports = {
  initializeDatabase,
  createUser,
  findUserByEmail,
  findUserById,
  listUsers,
  createContact,
  listContacts,
