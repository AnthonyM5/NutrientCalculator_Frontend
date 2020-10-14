class Ingredient {
    constructor(food){
        this.food_id = food
        this.addToMeal()
    }

    addToMeal(){
        api.addToMeal(1, this.food_id)
    }


}