module.exports = {
  PORT: process.env.PORT || 3000,
  db: process.env.MONGO_DB_URL || 'mongodb://127.0.0.1/nodejs_dev',
  email: process.env.EMAIL || '',
  emailPW: process.env.EMAIL_PASSWORD || '',
  emailService: process.env.EMAIL_SERVICE || 'gmail',
  baseURL: process.env.BASE_URL || 'http://192.168.1.2:3000',
  tokenKey: process.env.TOKEN_KEY || 'SECRET_KEY',
  jwtKey: process.env.JWT_KEY || 'JWT_KEY',
};
