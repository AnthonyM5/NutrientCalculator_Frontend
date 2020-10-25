class MealNutrients{
    constructor(nutrient, meal_id){
        this.name = nutrient.nutrientName
        this.value = nutrient.value
        // this.food_id = nutrient.food_id
        // this.modifier = modifier
        this.unit = nutrient.unitName
        this.addingAllValues()
       
    }

    addingAllValues(){
        console.log(this)
        // return state.nutrient_hashes[`${this.name}`] += this.value 
    }


    
}