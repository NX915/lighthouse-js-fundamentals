const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  for (let i = 0 ; i < bakeryA.length ; i++){
    for (let j = 0 ; j < bakeryB.length ; j++){
      for (let x = 0 ; x < recipes.length ; x++){
        if (recipes[x].ingredients.join() === bakeryA[i] + ',' + bakeryB[j] || 
        recipes[x].ingredients.join() === bakeryB[j] + ',' + bakeryA[i]){
          return recipes[x].name;
        }
      }
    }
  }
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
        ingredients: ['cream cheese', 'saffron']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));