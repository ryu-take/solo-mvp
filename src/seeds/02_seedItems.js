exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("items").insert([
        {
          id: 1,
          item_name: "消しゴム",
          item_price: 100,
          item_month: 12,
          item_day: 08,
          tag_id: 1,
        },
        {
          id: 2,
          item_name: "MACBOOK",
          item_price: 134000,
          item_month: 8,
          item_day: 10,
          tag_id: 2,
        },
        {
          id: 3,
          item_name: "Game",
          item_price: 8000,
          item_month: 12,
          item_day: 01,
          tag_id: 3,
        },
      ]);
    });
};
