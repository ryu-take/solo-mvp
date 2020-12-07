require("dotenv").config();
module.exports = {
  client: "pg",
  connection: process.env.DB_URL, //postgres:
  migrations: {
    directory: "./src/migrations",
  },
  seeds: { directory: "./src/seeds" },
};
