module.exports = ({ env }) => ({
  host: "127.0.0.1",
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "a231b63372902a68699fbeaa954a988c"),
    },
  },
});
// module.exports = {
//   host: "127.0.0.1",
// };
