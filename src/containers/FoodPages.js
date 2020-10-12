class FoodPages {
    constructor(id){
        api.fetchFood(id).then(this.buildPage.bind(this))
    }

    buildPage(food){
        this.food = food
        this.name = food.name
        this.id = food.fdcid
        this.science = food.science_name
        this.nutrient_hash = food.nutrient_hash
        this.renderFood()
    }

    getPortions(){
        const portions = new ApiService('https://api.nal.usda.gov/fdc/v1/foods?fdcIds=')
        return portions.fetchPortions(this.id)
        .then(data => {return data[0].foodPortions[0].gramWeight})
        
        
    }

    renderFood(){ 
        const { id, name, nutrient_hash } = this.food
        console.log(this)
        const body = document.body
        body.innerHTML = ""
        const header = document.createElement('h1')
        
        header.setAttribute('class', 'text-center')
        header.innerText = name
        body.append(header)
        const nutrientInfo = document.createElement('div')
        const button = document.createElement('button')
        button.setAttribute('onclick', "window.print()")
        Promise.resolve(this.getPortions()).then(modifier => nutrient_hash.forEach(nutrient => {new NutrientValues(nutrient, modifier)}))  
        body.append(button)
        body.append(nutrientInfo)
        
    }


}