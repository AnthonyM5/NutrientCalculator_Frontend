// Handles our nutrient hashes that are passing in from the food objects

class NutrientValues{
    constructor(nutrient, modifier, food_id){
        this.name = nutrient.nutrientName
        this.value = nutrient.value
        this.modifier = modifier
        this.food_id = food_id
        this.unit = nutrient.unitName
        this.renderNutrient()
    }


    renderNutrient(){
        // console.log(this)
        const card = document.createElement("div")
        const nutrientP = document.createElement("p")
        const newValue = this.value * (this.modifier / 100)
        const details = document.createElement('h3')
       
        if (!newValue){
            nutrientP.innerText = `${this.name} : ${this.value} ${this.unit}`
        } else {
            nutrientP.innerText = `${this.name} : ${newValue} ${this.unit}`
        }
        card.append(nutrientP)
        document.body.appendChild(card)
    }

    
}