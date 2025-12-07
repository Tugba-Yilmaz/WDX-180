let myFavouriteFoods = ["apple", "banana", "kofte", "pilav", "tursu", "kek"];

myFavouriteFoods.forEach((food, index) => {
  console.log("My #" + (index + 1) + " favorite food is " + food + ".");
});
console.log(myFavouriteFoods[1]);
myFavouriteFoods[2] = "corba";
console.log(myFavouriteFoods.length);
// change it to log "My 1st favorite food is ..., "My 2nd favorite food is ...", "My 3rd favorite food is ...", picking the right suffix for the number based on what it is.
myFavouriteFoods.forEach((food, index) => {
  let number = index + 1;

  let suffix;
  if (number === 1) {
    suffix = "st";
  } else if (number === 2) {
    suffix = "nd";
  } else if (number === 3) {
    suffix = "rd";
  } else {
    suffix = "th";
  }

  console.log(`My ${number}${suffix} favorite food is ${food}.`);
});

myFavouriteFoods[myFavouriteFoods.length - 1] = {
  foodName: "turta",
  basicIngredient: "chocolate",
};

let lastFood = myFavouriteFoods[myFavouriteFoods.length - 1];
console.log(
  `One of my favorite foods is ${lastFood.foodName} and its basic ingredient is ${lastFood.basicIngredient}`
);
