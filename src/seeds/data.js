exports.seed = function(knex) {
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex(/**/).insert([]);
    });
};
