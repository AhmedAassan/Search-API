let allRecipes = [];
let recipesDetials = {};
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");





async function getRecipes(term) {
  let apiRecipes = await fetch(`https://forkify-api.herokuapp.com/api/search?&q=${term}`);
  allRecipes = await apiRecipes.json();
  allRecipes = allRecipes.recipes;
  disblayRecipes()
}


function disblayRecipes() {
  cartoona = ``;
  for (let i = 0; i < allRecipes.length; i++) {
    cartoona += `<div class="col-md-4">
        <div class="recipe" onclick="getRecipeDetails(${allRecipes[i].recipe_id})">
          <img class="w-100" src="${allRecipes[i].image_url}" alt="">
            <h3 class="color-mine py-1">${allRecipes[i].title}</h3>
            <p>${allRecipes[i].publisher}</p>
        </div>

      </div>`;
  }
  document.getElementById('recipesRow').innerHTML = cartoona;

}

searchBtn.addEventListener("click", function () {
  getRecipes(searchInput.value);
})

async function getRecipeDetails(id) {

  let apiResponse = await fetch(`https://forkify-api.herokuapp.com/api/get?rId=${id}`);
  recipeDetails = await apiResponse.json();
  recipeDetails = recipeDetails.recipe;
  displayRecipeDetails();
}

function displayRecipeDetails() {
  let = cartoona = `<div class="recipeDetials py-1">
           <h2 class="color-mine py-1">${recipeDetails.title}</h2>
           <img class="w-100" src="${recipeDetails.image_url}" alt="">
           <ul class="fa-ul py-3">`
           for (x  of recipeDetails.ingredients ) {
            cartoona +=`<li class="d-flex align-items-center font-weight-bolder pt-3" ><span class="fa-li"><i class="fas fa-utensils"></i></span>${x}</li>`
           }
            
            
            cartoona +=  ` </ul>
          </div>`;
  document.getElementById("recipeDetails").innerHTML = cartoona;
  console.log(cartoona);
}