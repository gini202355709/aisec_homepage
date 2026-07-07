const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '..', '..', '.env') });

module.exports = {
  PORT: Number(process.env.PORT) || 4000,
  JWT_SECRET: process.env.JWT_SECRET || 'dev-secret',
  DEFAULT_ADMIN_EMAIL: process.env.DEFAULT_ADMIN_EMAIL || 'accslab@pusan.ac.kr',
  DEFAULT_ADMIN_PASSWORD: process.env.DEFAULT_ADMIN_PASSWORD || 'Kapd1594@',
  ADMIN_REGISTRATION_SECRET: process.env.ADMIN_REGISTRATION_SECRET || 'kaisa-admin-secret',
};
