require("dotenv").config();
const express = require("express");
const path = require("path");
const { innerJoin } = require("./knex");
const app = express();
const db = require("./knex");
// const bodyParser = require("body-parser");
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
app.use(express.json());

app.use(express.static(path.resolve(__dirname, "../..", "dist")));

const port = process.env.PORT || 3000;

app.get("/api/items", async (req, res) => {
  try {
    const month = req.query.month;
    let items;
    // const day = req.query.day;
    if (!month) {
      items = await db
        .select()
        .table("items")
        .innerJoin("tags", "tags.id", "items.tag_id"); //join
      // console.log(items);
    } else {
      items = await db
        .select()
        .table("items")
        .where("item_month", month)
        .innerJoin("tags", "tags.id", "items.tag_id");
      // .innerJoin("j", "items.id", "j.item_id")
      // .innerJoin("tags", "tags.id", "j.tag_id");
    }
    res.send(items);
  } catch (err) {
    console.error("Error getting!", err);
    res.sendStatus(500);
  }
});

app.post("/api/items", (req, res) => {
  try {
    console.log(req.body);
    db.select()
      .table("items")
      .insert(req.body)
      .catch(() => {});
    res.send("yay");
  } catch (err) {
    console.error("Error posting!", err);
    res.sendStatus(500);
  }
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
