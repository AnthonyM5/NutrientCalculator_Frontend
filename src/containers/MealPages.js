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
        // console.log(this)
        const body = document.body
        
        // const mealIngredients = document.createElement('li')
        body.innerHTML = ""
        // console.log(this.meal)
        const header = document.createElement('h1')
        header.setAttribute('class', 'text-center')
        header.innerText = this.name
        body.append(header)
        // mealInfo.appendChild(mealIngredients)
        
    }

    renderIngredients(){
        const ingredientAPI = new ApiService('http://localhost:3000/')
        this.ingredients.forEach(ingredient => {
            ingredientAPI.fetchFood(ingredient.food_id).then(data => {
                const mealInfo = document.createElement('p')
                mealInfo.innerText = JSON.stringify(data.name)
                document.body.append(mealInfo)
            })
        })
        
    }

    
}