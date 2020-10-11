class NutrientValues{
    constructor(nutrient){
        this.name = nutrient.nutrientName
        this.value = nutrient.value
        this.render.bind(this)
    }

    render(){
        const foodBody = document.body
        const nutrientP = document.createElement("p")
        nutrientP.innerText = `${this.name} : ${this.value}`
        foodBody.append(nutrientP)
    }
}