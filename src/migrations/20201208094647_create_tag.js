exports.up = function(knex) {
  return knex.schema.createTable("tags", (table) => {
    table.increments().primary();
    table.text("tag_name", 3);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("tags");
};
