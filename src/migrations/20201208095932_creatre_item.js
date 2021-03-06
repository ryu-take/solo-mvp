exports.up = function(knex) {
  return knex.schema.createTable("items", (table) => {
    table.increments().primary();
    table.string("item_name", 20).notNull();
    table.integer("item_price", 10).notNull();
    table.integer("item_month", 2).notNull();
    table.integer("item_day", 2) /*.notNull()*/;
    table
      .integer("tag_id", 3)
      .unsigned()
      .references("id")
      .inTable("tags");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("items");
};
