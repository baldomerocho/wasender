export default {
  secret: process.env.JWT_SECRET || "mysecret",
  expiresIn: process.env.EXPIRES_IN || "1d",
  refreshSecret: process.env.JWT_REFRESH_SECRET || "myanothersecret",
  refreshExpiresIn: process.env.REFRESH_EXPIRES_IN || "7d"
};
