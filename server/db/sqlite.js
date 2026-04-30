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
