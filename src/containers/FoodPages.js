class FoodPages {
    constructor(id){
        api.fetchFood(id).then(this.buildPage.bind(this))
    }

    buildPage(food){
        this.food = food
        this.renderFood()
        this.name = food.name
    }

    renderFood(){
        const { id, name, nutrient_hash } = this.food
        console.log(nutrient_hash[0].nutrientName)
        const body = document.body
        body.innerHTML = ""
        const header = document.createElement('h1')
        header.setAttribute('class', 'text-center')
        header.innerText = name
        const nutrientInfo = document.createElement('div')
        nutrient_hash.forEach(nutrient =>  new NutrientValues(nutrient))
        body.append(header)
        const button = document.createElement('button')
        button.setAttribute('onclick', "window.print()")
        body.append(nutrientInfo)
        
    }


}