class Ingredient {
    constructor(food){
        this.food_id = food
        this.name = food.name
        this.science_name = food.science
        this.addToMeal()
        this.meal_id = state.meal
    }

    addToMeal(){
        console.log(this)
        // api.addToMeal(1, this.food_id)
    }


}