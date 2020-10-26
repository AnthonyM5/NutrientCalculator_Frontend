class MealNutrients{
    constructor(nutrient, meal_id, food_id){
        this.name = nutrient.nutrientName
        this.value = nutrient.value
        this.food_id = food_id
        // this.modifier = modifier
        this.unit = nutrient.unitName
        this.addingAllValues()
        api.renderNutrients(state.nutrient_hashes)
       
    }

    
    addingAllValues(){
        // return state.nutrient_hashes[`${this.name}`] += this.value 
        if (state.nutrient_hashes[`${this.name}`] === undefined) {
            state.nutrient_hashes[`${this.name}`] = this.value
        } else {
            state.nutrient_hashes[`${this.name}`] += this.value
        }
    }


    


    
    // renderNutrientValues(){
    //     nutrientV.innerText = state.nutrient_hashes[`${name}`] 
    //     console.log(nutrientV)
    //     // allRow.appendChild(nutrientP)
    // }
   
    



    
}

