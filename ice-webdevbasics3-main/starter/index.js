// This is where your JS goes!

const things = ["dogs", 1.2, 0, false, { name: "Alice" }, -7];

// declarative code, with a callback function
const newthings = things.filter((t) => {
  return typeof t === "number";
});

console.log(newthings);

fetch("https://cs571api.cs.wisc.edu/rest/s26/ice/chili", {
  headers: {
    "X-CS571-ID": CS571.getBadgerId(),
  },
})
  .then((res) => {
    console.log(res.status);
    if (res.status === 200) {
      return res.json();
    } else {
      throw new Error();
    }
  })
  .then((data) => {
    console.log(data);

    // Five star reviews
    console.log("The 5-star reviews are...");
    let reviews = data.reviews
      .filter((review) => {
        return review.rating == 5;
      })
      .map((rev) => rev.txt);

    reviews.forEach((review) => {
      console.log(review);
    });
    console.log("");

    // Main instructions
    console.log("The main instructions are...");
    const mainInstructions = data.recipe.map((instr) => instr.split(":"[0]));
    console.log(mainInstructions);

    console.log("");

    console.log("The ingredients are...");
    const ingredients = Object.keys(data.ingredients);
    ingredients.map((ingredient) => {
      const ingredientObject = data.ingredients[ingredient];
      let newString = "";
      if (ingredientObject.amount) {
        newString += ingredientObject.amount + " ";
      }
      if (ingredientObject.unit) {
        newString += ingredientObject.unit + " ";
      }

      return newString;
    });
    console.log(ingredients);
  })
  .catch((err) => {
    alert("Uh oh! Something went wrong.");
  });
