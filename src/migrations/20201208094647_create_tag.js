exports.up = function(knex) {
  return knex.schema.createTable("tags", (table) => {
    table.increments("id");
    table.text("tag_name", 5);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("tags");
};
