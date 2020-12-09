exports.up = function(knex) {
  return knex.schema.createTable("j", (table) => {
    table
      .integer("item_id")
      .unsigned()
      .references("id")
      .inTable("items");
    table
      .integer("tag_id")
      .unsigned()
      .references("id")
      .inTable("tags");
  });
};

exports.down = function(knex) {};
