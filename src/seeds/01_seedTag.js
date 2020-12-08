exports.seed = function(knex) {
  return knex("tags")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("tags").insert([
        { id: 1, tag_name: "生活費" },
        { id: 2, tag_name: "仕事" },
        { id: 3, tag_name: "趣味" },
      ]);
    });
};
