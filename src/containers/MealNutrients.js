class MealNutrients{
    constructor(nutrient, meal_id, food_id){
        this.name = nutrient.nutrientName
        this.value = nutrient.value
        this.food_id = food_id
        // this.modifier = modifier
        this.unit = nutrient.unitName
        this.addingAllValues()
        this.renderNutrients()
       
    }

    
    addingAllValues(){
        // return state.nutrient_hashes[`${this.name}`] += this.value 
        if (state.nutrient_hashes[`${this.name}`] === undefined) {
            state.nutrient_hashes[`${this.name}`] = this.value
        } else {
            state.nutrient_hashes[`${this.name}`] += this.value
        }
    }


    

    renderNutrients(){
        // console.log(this)
        const allRow = document.createElement('div')
        allRow.setAttribute("class", "row")
        // const nutrientV = document.createElement("div")
        // nutrientV.setAttribute("class", "col-sm")
        const nutrientP = document.createElement("div")
        nutrientP.setAttribute("class", "col-sm")
       
        // const details = document.createElement('h3')
        // const allValues = []
        for (const name in state.nutrient_hashes) {
            nutrientP.innerText = name + " " + state.nutrient_hashes[`${name}`] 
            nutrientP.setAttribute("id", name)
            
            
            // this.renderNutrientValues(name)
        }
            // document.body.append(allRow)
           
        // 
        //
        console.log(nutrientP)
        allRow.append(nutrientP)
        document.body.append(allRow)
    }

    
    // renderNutrientValues(){
    //     nutrientV.innerText = state.nutrient_hashes[`${name}`] 
    //     console.log(nutrientV)
    //     // allRow.appendChild(nutrientP)
    // }
   
    



    
}

