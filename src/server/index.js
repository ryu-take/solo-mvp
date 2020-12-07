require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const db = require("./knex");

app.use(express.static(path.resolve(__dirname, "..", "dist")));

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("WOW I DID IT!");
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "dist", "index.html"));
});

(async () => {
  try {
    console.log("Running migrations");
    await db.migrate.latest();

    console.log("Starting express");
    app.listen(port, () => console.log(`App listening on port ${port}!`));
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();
