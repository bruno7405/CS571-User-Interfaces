// This is where your JS goes!
const ingredientsListNode = document.getElementById("ingredients-list");

fetch("https://cs571api.cs.wisc.edu/rest/s26/ice/chili", {
  method: "GET",
  headers: {
    "X-CS571-ID": CS571.getBadgerId(),
  },
})
  .then((r) => {
    console.log(r.status);
    return r.json();
  })
  .then((recipeData) => {
    console.log(recipeData);
    console.log(recipeData.ingredients);

    ingredientsListNode.innerHTML = "";

    const ingredients = recipeData.ingredients;
    Object(ingredients).forEach((item) => {
      let newLiNode = document.createElement("li");
      console.log(item.amount);
      newLiNode.innerText = item.amount + " " + item.unit + " " + item;
      ingredientsListNode.removeChi;
      ingredientsListNode.appendChild(newLiNode);
    });
  })
  .catch((error) => console.error(error));

const REVIEWS = [
  "A burst of warmth and flavor in every spoonful; simple yet irresistible!",
  "The perfect blend of spice and comfort, an easy go-to chili recipe.",
  "Loved the hearty texture and rich taste - a new family favorite!",
  "Quick, flavorful, and satisfying - this chili hits all the right notes!",
];

function displayReview() {
  // alert(REVIEWS[reviewNum]);
}

let title = document.getElementById("recipe-title");
let numIngredients =
  document.getElementById("ingredients-list").childElementCount;
title.innerText = "Easy " + numIngredients + " Ingredient Chili";
