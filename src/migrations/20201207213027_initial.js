exports.up = function(knex) {};

exports.down = function(knex) {};

//例
// exports.up = function(knex) {
//   return knex.schema.createTable("users", (table) => {
//     table.increments();
//     table.string("username");
//     table.string("email");
//   });
// };
// exports.down = function(knex) {
//   return knex.schema.dropTable("users");
// };
