class FoodPages {
    constructor(id){
        api.fetchFood(id).then(this.buildPage.bind(this))
    }

    buildPage(food){
        this.food = food
        renderFood()
    }

    renderFood(){
        const { id, name, nutrient_hash } = this.food
        const body = document.body
        body.innerHTML = ""
        const header = document.createElement('h1')
        header.setAttribute('class', 'text-center')
        header.innerText = this.name
        const nutrientInfo = document.createElement('p')
        nutrientInfo.innerText = JSON.stringify(nutrient_hash)
        body.append(nutrientInfo)
    }
}