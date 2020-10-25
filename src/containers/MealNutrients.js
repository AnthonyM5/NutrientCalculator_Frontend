class MealNutrients{
    constructor(nutrient, meal_id, food_id){
        this.name = nutrient.nutrientName
        this.value = nutrient.value
        this.food_id = food_id
        // this.modifier = modifier
        this.unit = nutrient.unitName
        this.addingAllValues()
       
    }

    addingAllValues(){
        // return state.nutrient_hashes[`${this.name}`] += this.value 
        if (state.nutrient_hashes[`${this.name}`] === undefined) {
            state.nutrient_hashes[`${this.name}`] = this.value
        } else {
            state.nutrient_hashes[`${this.name}`] += this.value
        }
        this.renderNutrients()
    }

    

    renderNutrients(){
        // console.log(this)
        
       
        // const details = document.createElement('h3')
        const allValues = []
        for (const name in state.nutrient_hashes) {
            nutrientP.innerText = name
            nutrientP.setAttribute("id", name)
            this.renderNutrientValues(state.nutrient_hashes[`${name}`])
        }
        
        // 
        allRow.append(nutrientP)
        // document.body.append(allRow)
        console.log(nutrientV)
        
    }

    renderNutrientValues(value){
        const oldVal = parseFloat(nutrientV.innerText)
        if (nutrientV === NaN){
            nutrientV.innerText = value
        } else {
            nutrientV.innerText = parseFloat(oldVal + value)
        }
        allRow.appendChild(nutrientP)
    }
   
    



    
}