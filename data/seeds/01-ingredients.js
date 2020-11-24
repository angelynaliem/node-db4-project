exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { ingredient_name: "Cup of AP flour" },
        { ingredient_name: "Tbs of soy sauce" },
        { ingredient_name: "Tbs of maple syrup" },
        { ingredient_name: "Pound of salmon" },
      ]);
    });
};
