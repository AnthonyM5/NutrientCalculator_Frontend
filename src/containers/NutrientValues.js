class NutrientValues{
    constructor(nutrient){
        this.name = nutrient.nutrientName
        this.value = nutrient.value
        this.unit = nutrient.unitName
        this.renderNutrient()
        console.log(name)
    }

    renderNutrient(){
        const card = document.createElement("div")
        const nutrientP = document.createElement("p")
        nutrientP.innerText = `${this.name} : ${this.value} ${this.unit}`
        card.append(nutrientP)
        document.body.appendChild(card)
    }
}