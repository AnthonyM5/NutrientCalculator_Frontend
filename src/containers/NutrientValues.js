class NutrientValues{
    constructor(nutrient){
        this.name = nutrient.nutrientName
        this.value = nutrient.value
        this.renderNutrient()
        console.log(name)
    }

    renderNutrient(){
        const card = document.createElement("div")
        const nutrientP = document.createElement("p")
        nutrientP.innerText = `${this.name} : ${this.value}`
        card.append(nutrientP)
        document.body.append(card)
    }
}