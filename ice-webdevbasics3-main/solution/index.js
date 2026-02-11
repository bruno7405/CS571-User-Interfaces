// This is where your JS goes!

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

    console.log("The following are the 5-star reviews...");
    console.log(data.reviews.filter((rev) => rev.rating === 5));

    console.log("The following are the main points...");
    console.log(data.recipe.map((inst) => inst.split(":")[0]));

    console.log("The following are the ingredients...");
    const ingrs = data.ingredients;
    console.log(
      Object.keys(ingrs).map(
        (ingr) => ingrs[ingr].amount + (ingrs[ingr].unit ?? "") + " " + ingr,
      ),
    );

    console.log("Is there some instruction to bake?");
    console.log(
      data.recipe.some((instr) => instr.toLowerCase().includes("bake")),
    );

    console.log("Is every review 4 or 5 stars?");
    console.log(data.reviews.every((r) => r.rating === 4 || r.rating === 5));

    console.log("What is the average review rating?");
    console.log(
      data.reviews.reduce((acc, curr) => acc + curr.rating, 0) /
        data.reviews.length,
    );

    console.log("What are main instructions as a string?");
    console.log(
      data.recipe
        .map((inst) => inst.split(":")[0])
        .reduce((prev, curr, i, arr) => {
          if (i === 0) {
            return curr;
          } else if (i === arr.length - 1) {
            return `${prev}, and ${curr}`;
          } else {
            return `${prev}, ${curr}`;
          }
        }, ""),
    );
  })
  .catch((err) => {
    alert("Uh oh! Something went wrong.");
  });
