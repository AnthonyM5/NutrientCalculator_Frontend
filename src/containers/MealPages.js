class MealPages {
    constructor(id){
        api.fetchMeal(id).then(this.buildMealPage.bind(this))
    }

    buildMealPage(meal){
        this.meal = meal
        this.name = meal.name
        this.id = meal.id
        this.ingredients = meal.ingredients
        this.renderMeal()
        this.renderIngredients()
        
    }

    // renderIngredients(ingredients){
    //     ingredients.forEach(ingredient => console.log(ingredient.food_id))
    // }

    renderMeal(){
        const {meal_id, ingredients, meal_name} = this.meal
        const mealCard = document.createElement('div')
        document.body.innerHTML = ""
        // console.log(this.meal)
        // this.addButtons()
        const header = document.createElement('h1')
        const idHeader = document.createElement('h3')
        idHeader.innerText = this.id
        idHeader.setAttribute('class', 'text-center')
        header.setAttribute('class', 'text-center')
        header.innerText = this.name
        mealCard.append(header, idHeader)
        document.body.append(mealCard)
        // mealInfo.appendChild(mealIngredients)
        
    }

    renderIngredients(){
        const ingredientAPI = new ApiService('http://localhost:3000/')
        this.ingredients.forEach(ingredient => {
            ingredientAPI.fetchFood(ingredient.food_id).then(data => {
                const ingredientDiv = document.createElement('div')
                const mealInfo = document.createElement('p')
                mealInfo.innerText = JSON.stringify(data.name)
                ingredientDiv.append(mealInfo)
                document.body.append(ingredientDiv)
            })
        })
        
    }

    
    
}

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }