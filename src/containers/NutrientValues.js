class NutrientValues{
    constructor(nutrient, modifier){
        this.name = nutrient.nutrientName
        this.value = nutrient.value
        this.modifier = modifier
        this.unit = nutrient.unitName
        this.renderNutrient()
    }


    renderNutrient(){
        
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