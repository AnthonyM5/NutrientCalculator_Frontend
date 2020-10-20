class Ingredient {
    constructor(food){
        this.food_id = food
        this.name = food.name
        this.science_name = food.science
        this.meal_id = state.meal
        this.addToMeal()
        
    }

    addToMeal(){
        console.log(this.meal_id)
        // api.addToMeal(1, this.food_id)
        new MealPages(this.meal_id)
    }


}