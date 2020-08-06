const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  // Code here! More complex than required, but works for special cases and many ingredients
  for (let i = 0; i < recipes.length; i++) {
    let matchArr = [false], match = true;//reset match result for new ingredient
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      for (let k = 0; k < bakeryA.length; k++) {//check ingredient against bakeryA
        if (recipes[i].ingredients[j] === bakeryA[k]) {
          matchArr[j] = true;
          break;
        } else {
          matchArr[j] = false;
        }
      }
      if (!matchArr[j]) {//check ingredient against bakeryB if not found at A
        for (let k = 0; k < bakeryB.length; k++) {
          if (recipes[i].ingredients[j] === bakeryB[k]) {
            matchArr[j] = true;
            break;
          } else {
            matchArr[j] = false;
          }
        }
      }
    }
    for (let ele of matchArr) {//mark match as false if any ingredient is not found
      if (!ele) {
        match = false;
      }
    }
    if (match) {//if all ingredient is found, return recipe
      return recipes[i].name;
    }
  }
  return false;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));