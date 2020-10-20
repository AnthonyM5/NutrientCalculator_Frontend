class Ingredient {
    constructor(food){
        this.food_id = food.food_id
        this.name = food.name
        this.science_name = food.science
        this.meal_id = state.meal
        this.addToMeal()
        
    }

    addToMeal(){
        // console.log(this.food_id)
        api.addToMeal(this.meal_id, this.food_id)
        new MealPages(this.meal_id)
    }


}