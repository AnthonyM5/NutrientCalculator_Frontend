class FoodPages {
    constructor(id){
        api.fetchFood(id).then(this.buildPage.bind(this))
    }

    buildPage(food){
        this.food = food
        this.name = food.name
        this.portions = this.getPortions()
        this.renderFood()
    }

    getPortions(){
        const portions = new ApiService('https://api.nal.usda.gov/fdc/v1/foods?fdcIds=')
        const id = 173193
        portions.fetchPortions(id).then(data => console.log(data[0].foodPortions[0].amount + " " + data[0].foodPortions[0].modifier))
    }

    renderFood(){
        const { id, name, nutrient_hash } = this.food
        const body = document.body
        body.innerHTML = ""
        const header = document.createElement('h1')
        header.setAttribute('class', 'text-center')
        header.innerText = name
        body.append(header)
        const nutrientInfo = document.createElement('div')
        const button = document.createElement('button')
        button.setAttribute('onclick', "window.print()")
        nutrient_hash.forEach(nutrient =>  new NutrientValues(nutrient))    
        body.append
        body.append(nutrientInfo)
        
    }


}