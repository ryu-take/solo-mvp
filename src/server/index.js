require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();

app.use(express.static(path.resolve(__dirname, "..", "dist")));

const port = process.env.PORT || 3000;

(async () => {
  try {
    // console.log("Running migrations");
    // await db.migrate.latest();

    console.log("Starting express");
    app.listen(port, () => console.log(`App listening on port ${port}!`));
  } catch (err) {
    console.error("Error starting app!", err);
    process.exit(-1);
  }
})();
