require("dotenv").config();
module.exports = {
  client: "pg",
  connection:
    process.env.DB_URL || `postgres://${process.env.USER}@127.0.0.1:5432/mymvp`,
  migrations: {
    directory: "./src/migrations",
  },
  seeds: { directory: "./src/seeds" },
};
