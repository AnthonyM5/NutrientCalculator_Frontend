class Ingredient {
    constructor(food){
        this.food_id = food
        this.name = food.name
        this.science_name = food.science
        this.addToMeal()
    }

    addToMeal(){
        api.addToMeal(1, this.food_id)
    }


}