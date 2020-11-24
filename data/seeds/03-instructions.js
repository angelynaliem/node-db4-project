exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("instructions")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("instructions").insert([
        {
          instruction_description:
            "1. Preheat oven to 425 degrees F. 2. Mix maple syrup and soy sauce and pour over salmon. 3. Place salmon in a baking dish. 4. Bake salmon for 18 minutes. 5. Enjoy!",
          recipe_id: 1,
        },
        {
          instruction_description:
            "1. Chop garlic. 2. Pour olive oil into the pan. 3. Put garlic into the pan. 4. Add spinach and cook until slightly wilted. 5. Enjoy!",
          recipe_id: 2,
        },
      ]);
    });
};
