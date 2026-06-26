const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/env');

function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}

function comparePassword(password, passwordHash) {
  return bcrypt.compareSync(password, passwordHash);
}

function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' });
}

function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}

function sanitizeUser(user) {
  if (!user) return null;
  const { passwordHash, ...rest } = user;
  return rest;
}

module.exports = {
  hashPassword,
  comparePassword,
  signToken,
  verifyToken,
  sanitizeUser,
};
