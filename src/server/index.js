require("dotenv").config();
const express = require("express");
const path = require("path");
const app = express();
const db = require("./knex");

app.use(express.static(path.resolve(__dirname, "../..", "dist")));

const port = process.env.PORT || 3000;

app.get("/all", async (req, res) => {
  try {
    const items = await db.select().table("items");
    res.send(items); //どっちも送りたい?
  } catch (err) {
    console.error("Error loading !", err);
    res.sendStatus(500);
  }
  app.get("/:month", async (req, res) => {
    console.log("aaa", req.params.month);
    try {
      const items = await db.select
        .table("items")
        .where("item_month", req.params.month);
      res.json(items);
    } catch (err) {
      console.error("Error loading !", err);
      res.sendStatus(500);
    }
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../..", "dist", "index.html"));
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
