module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9c74bbcd8ded38ae7f672b0d200bdf35'),
  },
});
